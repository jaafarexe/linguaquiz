import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Question, QuizAnswerRecord } from '../types/quiz';
import { Volume2, Flame, ArrowRight, CheckCircle2, XCircle, Clock, X } from 'lucide-react';
import { soundEffects, speakWord } from '../utils/audio';

interface QuizViewProps {
  languageName: string;
  languageFlag: string;
  speechLang: string;
  levelNumber: number;
  levelTitle: string;
  questions: Question[];
  timerDurationSeconds: number; // e.g. 20, or 0 for untimed
  soundEnabled: boolean;
  onComplete: (answers: QuizAnswerRecord[], finalScore: number, maxStreak: number) => void;
  onExit: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  languageName,
  languageFlag,
  speechLang,
  levelNumber,
  levelTitle,
  questions,
  timerDurationSeconds,
  soundEnabled,
  onComplete,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([]);

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [timeRemaining, setTimeRemaining] = useState(timerDurationSeconds);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentQuestion = questions[currentIndex];
  const progressPercent = ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

  // Speak word when question changes
  useEffect(() => {
    if (currentQuestion) {
      // Small delay for natural pacing
      const t = setTimeout(() => {
        speakWord(currentQuestion.targetWord, speechLang);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [currentIndex, currentQuestion, speechLang]);

  // Handle Answer Selection
  const handleSelectOption = useCallback(
    (index: number) => {
      if (isAnswered || !currentQuestion) return;

      const timeSpent = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
      const isCorrect = index === currentQuestion.correctIndex;

      setSelectedOption(index);
      setIsAnswered(true);

      let newStreak = streak;
      let newScore = score;

      if (isCorrect) {
        newStreak = streak + 1;
        // Base points + streak multiplier + speed bonus
        const streakMultiplier = Math.min(3, 1 + (newStreak - 1) * 0.25);
        const speedBonus = timerDurationSeconds > 0 ? Math.max(0, Math.round((timeRemaining / timerDurationSeconds) * 40)) : 20;
        const earned = Math.round((100 + speedBonus) * streakMultiplier);

        newScore += earned;
        setScore(newScore);
        setStreak(newStreak);
        setMaxStreak(prev => Math.max(prev, newStreak));

        if (newStreak >= 3) {
          soundEffects.playStreak(soundEnabled);
        } else {
          soundEffects.playCorrect(soundEnabled);
        }
      } else {
        newStreak = 0;
        setStreak(0);
        soundEffects.playWrong(soundEnabled);
      }

      const answerRecord: QuizAnswerRecord = {
        question: currentQuestion,
        selectedIndex: index,
        isCorrect,
        timeSpentSeconds: timeSpent
      };

      setAnswers(prev => [...prev, answerRecord]);
    },
    [isAnswered, currentQuestion, streak, score, timerDurationSeconds, timeRemaining, soundEnabled]
  );

  // Timer Countdown logic
  useEffect(() => {
    if (timerDurationSeconds <= 0 || isAnswered) return;

    setTimeRemaining(timerDurationSeconds);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          // Auto select timeout (wrong answer)
          handleSelectOption(-1);
          return 0;
        }
        if (prev <= 5 && soundEnabled) {
          soundEffects.playTick(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, timerDurationSeconds, isAnswered, handleSelectOption, soundEnabled]);

  // Proceed to next question or complete
  const handleNext = useCallback(() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeRemaining(timerDurationSeconds);
      startTimeRef.current = Date.now();
    } else {
      // Quiz finished
      onComplete(answers, score, maxStreak);
    }
  }, [currentIndex, questions.length, timerDurationSeconds, onComplete, answers, score, maxStreak]);

  // Keyboard shortcut listener: 1-4 for options, Enter for next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showExitConfirm) return;

      if (!isAnswered) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const optIdx = parseInt(e.key, 10) - 1;
          if (currentQuestion && optIdx < currentQuestion.options.length) {
            handleSelectOption(optIdx);
          }
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, currentQuestion, handleSelectOption, handleNext, showExitConfirm]);

  const timerRatio = timerDurationSeconds > 0 ? timeRemaining / timerDurationSeconds : 1;
  const isTimeCritical = timerDurationSeconds > 0 && timeRemaining <= 5;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Top HUD: Info, Progress, Streak, Exit */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
              title="Quit Quiz"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-base">{languageFlag}</span>
                <span className="font-semibold text-slate-200">{languageName}</span>
                <span>·</span>
                <span>Level {levelNumber}: {levelTitle}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {streak > 1 && (
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                <Flame className="w-4 h-4 fill-amber-400 animate-bounce" />
                <span className="font-mono tabular-nums">{streak}x</span>
                <span className="text-xs text-amber-300 font-normal hidden sm:inline">Streak!</span>
              </div>
            )}

            <div className="text-right">
              <span className="text-xs text-slate-400">Score</span>
              <div className="font-mono tabular-nums text-lg font-bold text-white leading-none">
                {score}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar & Question Counter */}
        <div className="space-y-1.5 mb-6">
          <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{Math.round(progressPercent)}% completed</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-500 to-indigo-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-6">
            {/* Header within card: category and timer */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                {currentQuestion.category}
              </span>

              {timerDurationSeconds > 0 && (
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                    isTimeCritical
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span className="tabular-nums">{timeRemaining}s</span>
                </div>
              )}
            </div>

            {/* Target Vocabulary Word Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-800/80 mb-5">
              <div>
                <p className="text-xs text-slate-400 mb-1">{currentQuestion.prompt}</p>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentQuestion.targetWord}
                  </h2>
                  <button
                    onClick={() => speakWord(currentQuestion.targetWord, speechLang)}
                    className="p-2 text-sky-400 hover:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 rounded-full transition-colors focus:outline-none"
                    title="Listen to pronunciation"
                    aria-label="Listen to pronunciation"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {currentQuestion.phonetic && (
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {currentQuestion.phonetic}
                  </p>
                )}
              </div>
            </div>

            {/* 4 Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectChoice = idx === currentQuestion.correctIndex;

                let buttonStyle = 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600';

                if (isAnswered) {
                  if (isCorrectChoice) {
                    buttonStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-500';
                  } else if (isSelected && !isCorrectChoice) {
                    buttonStyle = 'bg-rose-950/60 border-rose-500 text-rose-200 line-through';
                  } else {
                    buttonStyle = 'bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`relative p-4 rounded-xl border text-left transition-all duration-150 flex items-center justify-between group focus:outline-none ${buttonStyle}`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span className="w-6 h-6 rounded-md bg-slate-800/90 text-slate-400 font-mono text-xs flex items-center justify-center shrink-0 border border-slate-700">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-medium truncate">{option}</span>
                    </div>

                    {isAnswered && isCorrectChoice && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrectChoice && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback Drawer when Answered */}
            {isAnswered && (
              <div
                className={`mt-6 p-4 rounded-xl border transition-all ${
                  selectedOption === currentQuestion.correctIndex
                    ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-100'
                    : 'bg-rose-950/30 border-rose-800/60 text-rose-100'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 font-semibold text-sm">
                  {selectedOption === currentQuestion.correctIndex ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Correct! Well done.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span className="text-rose-400">
                        {selectedOption === -1 ? 'Time Expired!' : 'Incorrect.'} Correct answer:{' '}
                        <strong>{currentQuestion.options[currentQuestion.correctIndex]}</strong>
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {currentQuestion.explanation}
                </p>

                {/* Example sentence */}
                <div className="bg-slate-950/60 rounded-lg p-3 text-xs border border-slate-800/80">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="font-semibold text-slate-300">Context Example:</span>
                    <button
                      onClick={() => speakWord(currentQuestion.exampleSentence.foreign, speechLang)}
                      className="text-sky-400 hover:text-sky-300 flex items-center gap-1 focus:outline-none"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Hear sentence</span>
                    </button>
                  </div>
                  <p className="text-slate-200 font-medium italic">
                    "{currentQuestion.exampleSentence.foreign}"
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    "{currentQuestion.exampleSentence.english}"
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
        <div className="text-xs text-slate-400 hidden sm:block">
          {!isAnswered ? (
            <span>Use keys <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">1</kbd>-<kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">4</kbd> to select</span>
          ) : (
            <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">Enter ↵</kbd> to continue</span>
          )}
        </div>

        <div className="w-full sm:w-auto flex justify-end">
          {isAnswered ? (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>{currentIndex + 1 === questions.length ? 'See Results' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="text-xs text-slate-500 italic py-2">
              Select an answer above to reveal explanation
            </div>
          )}
        </div>
      </div>

      {/* Quit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Exit current quiz?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your ongoing progress for this session will be lost. Are you sure you want to return to the hub?
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Keep Playing
              </button>
              <button
                onClick={onExit}
                className="flex-1 py-2 text-xs font-semibold text-rose-300 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 rounded-lg transition-colors"
              >
                Quit Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
