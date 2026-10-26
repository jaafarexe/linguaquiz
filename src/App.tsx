/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { UserProgress, QuizSessionSummary, QuizAnswerRecord, Question } from './types/quiz';
import { LANGUAGES, LEVEL_INFOS, getQuestionsForQuiz } from './data/quizData';
import {
  loadUserProgress,
  saveUserProgress,
  recordQuizCompletion,
  removeWordFromMistakeVault,
  getDefaultProgress
} from './utils/storage';
import { soundEffects } from './utils/audio';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { QuizView } from './components/QuizView';
import { ResultsScreen } from './components/ResultsScreen';
import { LevelsView } from './components/LevelsView';
import { MistakeVaultView } from './components/MistakeVaultView';
import { StatsRecordsView } from './components/StatsRecordsView';
import { Confetti } from './components/Confetti';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(getDefaultProgress);
  const [activeTab, setActiveTab] = useState<'hub' | 'levels' | 'mistakes' | 'stats'>('hub');
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Active Quiz State
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<Question[]>([]);
  const [currentQuizLanguageId, setCurrentQuizLanguageId] = useState<string>('es');
  const [currentQuizLevel, setCurrentQuizLevel] = useState<number>(1);
  const [lastSummary, setLastSummary] = useState<QuizSessionSummary | null>(null);
  const [isNewUnlock, setIsNewUnlock] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  // Load progress on initial mount
  useEffect(() => {
    const loaded = loadUserProgress();
    setProgress(loaded);
    setCurrentQuizLanguageId(loaded.selectedLanguageId || 'es');
  }, []);

  const activeLanguage =
    LANGUAGES.find(l => l.id === currentQuizLanguageId) || LANGUAGES[0];
  const activeLevelInfo =
    LEVEL_INFOS.find(lvl => lvl.level === currentQuizLevel) || LEVEL_INFOS[0];

  // Sound toggle
  const handleToggleSound = useCallback(() => {
    setProgress(prev => {
      const updated = { ...prev, soundEnabled: !prev.soundEnabled };
      saveUserProgress(updated);
      return updated;
    });
  }, []);

  // Update timer setting
  const handleUpdateTimerSetting = useCallback((seconds: number) => {
    setProgress(prev => {
      const updated = { ...prev, timerSeconds: seconds };
      saveUserProgress(updated);
      return updated;
    });
  }, []);

  // Select language
  const handleSelectLanguage = useCallback((langId: string) => {
    setCurrentQuizLanguageId(langId);
    setProgress(prev => {
      const updated = { ...prev, selectedLanguageId: langId };
      saveUserProgress(updated);
      return updated;
    });
  }, []);

  // Start regular quiz
  const handleStartQuiz = useCallback((level: number, languageId?: string) => {
    const targetLangId = languageId || currentQuizLanguageId;
    setCurrentQuizLanguageId(targetLangId);
    setCurrentQuizLevel(level);

    // Fetch 5 targeted questions for this level and language
    const questions = getQuestionsForQuiz(targetLangId, level, 5);
    setCurrentQuizQuestions(questions);

    setIsQuizActive(true);
    setShowResults(false);
    setConfettiActive(false);
    setIsNewUnlock(false);
  }, [currentQuizLanguageId]);

  // Quick Play (starts highest unlocked level for current language)
  const handleQuickPlay = useCallback(() => {
    const unlocked = progress.unlockedLevels[currentQuizLanguageId] || [1];
    const highest = Math.max(...unlocked);
    handleStartQuiz(highest, currentQuizLanguageId);
  }, [progress.unlockedLevels, currentQuizLanguageId, handleStartQuiz]);

  // Start a custom quiz from Mistake Vault or Missed Words
  const handlePracticeCustomQuestions = useCallback((customQuestions: Question[]) => {
    if (customQuestions.length === 0) return;

    // Pick language and level based on first question or current
    const langId = customQuestions[0].languageId || currentQuizLanguageId;
    setCurrentQuizLanguageId(langId);
    setCurrentQuizLevel(customQuestions[0].level || 1);

    // Shuffle options for practice questions
    const prepared = customQuestions.map(q => {
      const originalCorrectOption = q.options[q.correctIndex];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      return {
        ...q,
        options: shuffledOptions,
        correctIndex: shuffledOptions.indexOf(originalCorrectOption)
      };
    });

    setCurrentQuizQuestions(prepared);
    setIsQuizActive(true);
    setShowResults(false);
    setConfettiActive(false);
    setIsNewUnlock(false);
  }, [currentQuizLanguageId]);

  // Quiz completion handler
  const handleQuizComplete = useCallback(
    (answers: QuizAnswerRecord[], finalScore: number, maxStreak: number) => {
      const totalQuestions = answers.length;
      const correctAnswers = answers.filter(a => a.isCorrect).length;
      const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

      let stars = 0;
      if (accuracy >= 95) stars = 3;
      else if (accuracy >= 80) stars = 2;
      else if (accuracy >= 70) stars = 1;

      // Calculate XP
      const xp = Math.round(finalScore * 0.5 + correctAnswers * 20);

      const summary: QuizSessionSummary = {
        languageId: currentQuizLanguageId,
        level: currentQuizLevel,
        totalQuestions,
        correctAnswers,
        accuracy,
        score: finalScore,
        maxStreak,
        xpEarned: xp,
        starsEarned: stars,
        answers,
        isNewUnlock: false,
        date: new Date().toISOString()
      };

      // Record in storage and calculate progression
      const { updated, isNewLevelUnlocked } = recordQuizCompletion(progress, summary);
      summary.isNewUnlock = isNewLevelUnlocked;

      setProgress(updated);
      setLastSummary(summary);
      setIsNewUnlock(isNewLevelUnlocked);
      setIsQuizActive(false);
      setShowResults(true);

      if (accuracy >= 70) {
        setConfettiActive(true);
        if (isNewLevelUnlocked) {
          soundEffects.playLevelUp(progress.soundEnabled);
        } else {
          soundEffects.playCorrect(progress.soundEnabled);
        }
      }
    },
    [currentQuizLanguageId, currentQuizLevel, progress]
  );

  // Remove word from mistake vault
  const handleRemoveMistake = useCallback((questionId: string) => {
    setProgress(prev => removeWordFromMistakeVault(prev, questionId));
  }, []);

  // Reset all progress
  const handleResetProgress = useCallback(() => {
    const initial = getDefaultProgress();
    saveUserProgress(initial);
    setProgress(initial);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      <Confetti active={confettiActive} duration={3500} />

      {/* Header is always visible on non-quiz views; during active quiz we show quiz HUD */}
      {!isQuizActive && (
        <Header
          activeTab={activeTab}
          onSelectTab={tab => {
            setActiveTab(tab);
            setShowResults(false);
          }}
          onQuickPlay={handleQuickPlay}
          streak={progress.currentGlobalStreak}
          mistakesCount={progress.mistakeVault.length}
          soundEnabled={progress.soundEnabled}
          onToggleSound={handleToggleSound}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1 flex flex-col">
        {isQuizActive ? (
          <QuizView
            languageName={activeLanguage.name}
            languageFlag={activeLanguage.flag}
            speechLang={activeLanguage.speechLang}
            levelNumber={currentQuizLevel}
            levelTitle={activeLevelInfo.title}
            questions={currentQuizQuestions}
            timerDurationSeconds={progress.timerSeconds}
            soundEnabled={progress.soundEnabled}
            onComplete={handleQuizComplete}
            onExit={() => setIsQuizActive(false)}
          />
        ) : showResults && lastSummary ? (
          <ResultsScreen
            summary={lastSummary}
            speechLang={activeLanguage.speechLang}
            languageName={activeLanguage.name}
            isNewLevelUnlocked={isNewUnlock}
            onPlayNextLevel={
              currentQuizLevel < 5
                ? () => handleStartQuiz(currentQuizLevel + 1, currentQuizLanguageId)
                : undefined
            }
            onRetry={() => handleStartQuiz(currentQuizLevel, currentQuizLanguageId)}
            onPracticeMissedWords={handlePracticeCustomQuestions}
            onBackToHub={() => {
              setShowResults(false);
              setActiveTab('hub');
            }}
          />
        ) : activeTab === 'hub' ? (
          <HomeScreen
            progress={progress}
            onSelectLanguage={handleSelectLanguage}
            onStartQuiz={lvl => handleStartQuiz(lvl, currentQuizLanguageId)}
            onOpenMistakeVault={() => setActiveTab('mistakes')}
            onUpdateTimerSetting={handleUpdateTimerSetting}
          />
        ) : activeTab === 'levels' ? (
          <LevelsView
            progress={progress}
            onSelectLanguage={handleSelectLanguage}
            onStartQuiz={(langId, lvl) => handleStartQuiz(lvl, langId)}
          />
        ) : activeTab === 'mistakes' ? (
          <MistakeVaultView
            mistakes={progress.mistakeVault}
            onRemoveWord={handleRemoveMistake}
            onLaunchPracticeQuiz={handlePracticeCustomQuestions}
            onBackToHub={() => setActiveTab('hub')}
          />
        ) : (
          <StatsRecordsView
            progress={progress}
            onResetProgress={handleResetProgress}
            onPlayLevel={(langId, lvl) => handleStartQuiz(lvl, langId)}
          />
        )}
      </main>

      {/* Clean Footer with unboxed metadata */}
      {!isQuizActive && (
        <footer className="border-t border-slate-900 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-400">LinguaQuiz</span>
              <span aria-hidden="true">·</span>
              <span>Multilingual Vocabulary Mastery</span>
              <span aria-hidden="true">·</span>
              <span>6 Languages</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Speech Audio</span>
              <span aria-hidden="true">·</span>
              <span>Progressive Unlock</span>
              <span aria-hidden="true">·</span>
              <span>Spaced Error Retention</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
