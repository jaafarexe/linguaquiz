import React, { useState } from 'react';
import { QuizSessionSummary, Question } from '../types/quiz';
import { Star, RotateCcw, ArrowRight, Volume2, CheckCircle2, XCircle, Award, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { speakWord } from '../utils/audio';

interface ResultsScreenProps {
  summary: QuizSessionSummary;
  speechLang: string;
  languageName: string;
  isNewLevelUnlocked: boolean;
  onPlayNextLevel?: () => void;
  onRetry: () => void;
  onPracticeMissedWords: (missedQuestions: Question[]) => void;
  onBackToHub: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  summary,
  speechLang,
  languageName,
  isNewLevelUnlocked,
  onPlayNextLevel,
  onRetry,
  onPracticeMissedWords,
  onBackToHub
}) => {
  const [expandedMissedIndex, setExpandedMissedIndex] = useState<number | null>(0);

  const missedAnswers = summary.answers.filter(a => !a.isCorrect);
  const missedQuestions = missedAnswers.map(a => a.question);
  const passed = summary.accuracy >= 70;

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 animate-fade-in">
      {/* Top Victory Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
        {/* Glow ambient background */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Stars */}
        <div className="flex justify-center items-center gap-2 mb-4">
          {[1, 2, 3].map(starNum => (
            <Star
              key={starNum}
              className={`w-9 h-9 transition-transform duration-300 ${
                starNum <= summary.starsEarned
                  ? 'fill-amber-400 text-amber-400 scale-110 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                  : 'text-slate-700'
              }`}
            />
          ))}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          {summary.accuracy === 100
            ? 'Flawless Mastery!'
            : passed
            ? 'Level Completed!'
            : 'Good Effort! Keep Practicing'}
        </h1>

        <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
          {passed
            ? `Outstanding performance on ${languageName} Level ${summary.level}. You answered ${summary.correctAnswers} of ${summary.totalQuestions} questions correctly.`
            : `You answered ${summary.correctAnswers} of ${summary.totalQuestions} questions. Score 70% or higher to unlock the next level.`}
        </p>

        {/* New Level Unlock Alert */}
        {isNewLevelUnlocked && (
          <div className="mb-6 max-w-md mx-auto p-4 rounded-xl bg-gradient-to-r from-sky-500/15 via-emerald-500/15 to-sky-500/15 border border-sky-500/30 flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                New Level Unlocked! <Award className="w-4 h-4 text-amber-400" />
              </h4>
              <p className="text-xs text-sky-200">
                You have unlocked Level {summary.level + 1} in {languageName}!
              </p>
            </div>
          </div>
        )}

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5">
            <span className="text-xs text-slate-400 block mb-1">Final Score</span>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-white">
              {summary.score}
            </span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5">
            <span className="text-xs text-slate-400 block mb-1">Accuracy</span>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-emerald-400">
              {summary.accuracy}%
            </span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5">
            <span className="text-xs text-slate-400 block mb-1">Max Streak</span>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-amber-400">
              {summary.maxStreak}x
            </span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5">
            <span className="text-xs text-slate-400 block mb-1">XP Earned</span>
            <span className="font-mono tabular-nums text-xl sm:text-2xl font-bold text-sky-400">
              +{summary.xpEarned}
            </span>
          </div>
        </div>

        {/* Primary Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {isNewLevelUnlocked && onPlayNextLevel && (
            <button
              onClick={onPlayNextLevel}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Play Level {summary.level + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onRetry}
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>

          {missedQuestions.length > 0 && (
            <button
              onClick={() => onPracticeMissedWords(missedQuestions)}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-rose-300 bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Practice {missedQuestions.length} Missed Words</span>
            </button>
          )}

          <button
            onClick={onBackToHub}
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Return to Hub
          </button>
        </div>
      </div>

      {/* Review Section: Missed Words Breakdown */}
      {missedAnswers.length > 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Review Missed Vocabulary</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {missedAnswers.length} words
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Study the explanations and listen to pronunciations to lock these words in memory.
              </p>
            </div>

            <button
              onClick={() => onPracticeMissedWords(missedQuestions)}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-rose-500 text-white hover:bg-rose-400 transition-colors self-start sm:self-auto"
            >
              Drill These Words Now
            </button>
          </div>

          <div className="space-y-3">
            {missedAnswers.map((answer, index) => {
              const q = answer.question;
              const isExpanded = expandedMissedIndex === index;

              return (
                <div
                  key={q.id}
                  className="bg-slate-950/60 border border-slate-800/80 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedMissedIndex(isExpanded ? null : index)}
                    className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-1 rounded bg-rose-500/20 text-rose-400 shrink-0">
                        <XCircle className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-white truncate">
                            {q.targetWord}
                          </span>
                          {q.phonetic && (
                            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                              {q.phonetic}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          Correct: <span className="text-emerald-400 font-medium">{q.options[q.correctIndex]}</span>
                          {answer.selectedIndex >= 0 && (
                            <span className="ml-2 text-slate-500">
                              (You picked: <span className="text-rose-400 line-through">{q.options[answer.selectedIndex]}</span>)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          speakWord(q.targetWord, speechLang);
                        }}
                        className="p-1.5 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-lg transition-colors"
                        title="Pronounce"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 text-xs space-y-3">
                      <div>
                        <span className="font-semibold text-slate-300">Explanation:</span>
                        <p className="text-slate-400 mt-0.5 leading-relaxed">{q.explanation}</p>
                      </div>

                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800/80">
                        <div className="flex items-center justify-between text-slate-400 mb-1">
                          <span className="font-medium text-slate-300">Context Example:</span>
                          <button
                            onClick={() => speakWord(q.exampleSentence.foreign, speechLang)}
                            className="text-sky-400 hover:text-sky-300 flex items-center gap-1"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Hear audio</span>
                          </button>
                        </div>
                        <p className="text-slate-200 font-medium italic">
                          "{q.exampleSentence.foreign}"
                        </p>
                        <p className="text-slate-400 mt-0.5">
                          "{q.exampleSentence.english}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Zero Missed Words!</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            You achieved 100% accuracy on every question in this round. Clean sweep!
          </p>
        </div>
      )}
    </div>
  );
};
