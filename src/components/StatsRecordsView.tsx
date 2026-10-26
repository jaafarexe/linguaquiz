import React, { useState } from 'react';
import { UserProgress } from '../types/quiz';
import { LANGUAGES, LEVEL_INFOS } from '../data/quizData';
import { Trophy, Flame, Target, Award, Star, Zap, CheckCircle2, RotateCcw } from 'lucide-react';

interface StatsRecordsViewProps {
  progress: UserProgress;
  onResetProgress: () => void;
  onPlayLevel: (langId: string, level: number) => void;
}

export const StatsRecordsView: React.FC<StatsRecordsViewProps> = ({
  progress,
  onResetProgress,
  onPlayLevel
}) => {
  const [selectedLangId, setSelectedLangId] = useState<string>('all');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const globalAccuracy =
    progress.totalAnswered > 0
      ? Math.round((progress.totalCorrectAnswers / progress.totalAnswered) * 100)
      : 0;

  // Compute Achievements
  const achievements = [
    {
      id: 'first_steps',
      title: 'First Step',
      description: 'Complete your first language vocabulary quiz.',
      isUnlocked: progress.totalQuizzesTaken >= 1,
      icon: Award
    },
    {
      id: 'on_fire',
      title: 'Streak Master',
      description: 'Reach a streak of 3 consecutive quizzes passed.',
      isUnlocked: progress.highestGlobalStreak >= 3,
      icon: Flame
    },
    {
      id: 'century',
      title: 'Word Centurion',
      description: 'Answer 50 or more vocabulary questions correctly.',
      isUnlocked: progress.totalCorrectAnswers >= 50,
      icon: Target
    },
    {
      id: 'polyglot',
      title: 'Polyglot Explorer',
      description: 'Unlock Level 2 or higher in at least 3 distinct languages.',
      isUnlocked:
        Object.values(progress.unlockedLevels).filter(lvls => lvls.length > 1).length >= 3,
      icon: Trophy
    },
    {
      id: 'scholar',
      title: 'Scholar Level',
      description: 'Earn 1,000 or more total XP across all languages.',
      isUnlocked: progress.totalXp >= 1000,
      icon: Zap
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 animate-fade-in">
      {/* Overview Cards */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-sky-400 mb-1">
              RECORD & PERFORMANCE TELEMETRY
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Learning Statistics & High Scores
            </h1>
          </div>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="text-xs text-slate-500 hover:text-rose-400 flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress</span>
          </button>
        </div>

        {/* 4 Large Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 block mb-1">Total XP</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono tabular-nums">
              {progress.totalXp}
            </div>
            <span className="text-2xs text-slate-500 mt-1 block">Accumulated study score</span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 block mb-1">Lifetime Accuracy</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              {globalAccuracy}%
            </div>
            <span className="text-2xs text-slate-500 mt-1 block">
              {progress.totalCorrectAnswers} / {progress.totalAnswered} questions
            </span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 block mb-1">Highest Streak</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums flex items-center gap-1">
              <span>{progress.highestGlobalStreak}</span>
              <Flame className="w-5 h-5 fill-amber-400" />
            </div>
            <span className="text-2xs text-slate-500 mt-1 block">
              Current: {progress.currentGlobalStreak} quizzes
            </span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 block mb-1">Quizzes Completed</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono tabular-nums">
              {progress.totalQuizzesTaken}
            </div>
            <span className="text-2xs text-slate-500 mt-1 block">Total sessions cleared</span>
          </div>
        </div>
      </div>

      {/* Level High Scores Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              High Scores Leaderboard
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Personal record scores and star ratings by language and tier.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedLangId('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                selectedLangId === 'all'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            {LANGUAGES.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLangId(lang.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                  selectedLangId === lang.id
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">Language</th>
                  <th className="py-3 px-4">Level</th>
                  <th className="py-3 px-4">High Score</th>
                  <th className="py-3 px-4">Best Accuracy</th>
                  <th className="py-3 px-4">Stars</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {LANGUAGES.filter(l => selectedLangId === 'all' || l.id === selectedLangId).flatMap(
                  lang => {
                    const unlocked = progress.unlockedLevels[lang.id] || [1];

                    return LEVEL_INFOS.map(lvl => {
                      const isUnlocked = unlocked.includes(lvl.level);
                      const record = progress.levelScores[`${lang.id}_${lvl.level}`];

                      return (
                        <tr
                          key={`${lang.id}_${lvl.level}`}
                          className="hover:bg-slate-800/40 transition-colors"
                        >
                          <td className="py-3 px-4 font-sans font-medium text-slate-200">
                            <span className="mr-2 text-base">{lang.flag}</span>
                            {lang.name}
                          </td>
                          <td className="py-3 px-4 text-slate-300 font-sans">
                            <span className="font-semibold text-white">Lvl {lvl.level}</span>: {lvl.title}
                          </td>
                          <td className="py-3 px-4 font-bold text-white tabular-nums">
                            {record ? record.highScore : '—'}
                          </td>
                          <td className="py-3 px-4 text-emerald-400 tabular-nums">
                            {record ? `${record.highestAccuracy}%` : '—'}
                          </td>
                          <td className="py-3 px-4">
                            {record ? (
                              <div className="flex items-center gap-1">
                                {[1, 2, 3].map(s => (
                                  <Star
                                    key={s}
                                    className={`w-3.5 h-3.5 ${
                                      s <= record.stars
                                        ? 'fill-amber-400 text-amber-400'
                                        : 'text-slate-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            ) : (
                              <span className="text-slate-600 font-sans">—</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right font-sans">
                            {isUnlocked ? (
                              <button
                                onClick={() => onPlayLevel(lang.id, lvl.level)}
                                className="px-3 py-1 rounded bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-300 transition-colors text-xs font-semibold"
                              >
                                {record ? 'Replay' : 'Play'}
                              </button>
                            ) : (
                              <span className="text-2xs text-slate-600 uppercase">Locked</span>
                            )}
                          </td>
                        </tr>
                      );
                    });
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Badges and Milestones */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight">
          Milestones & Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map(ach => {
            const Icon = ach.icon;

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-2xl border transition-all ${
                  ach.isUnlocked
                    ? 'bg-slate-900 border-sky-500/30 text-white shadow-lg shadow-sky-500/5'
                    : 'bg-slate-950/40 border-slate-800/50 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2.5 rounded-xl ${
                      ach.isUnlocked
                        ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                        : 'bg-slate-800 text-slate-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{ach.title}</h3>
                    <span className="text-2xs font-semibold uppercase tracking-wider text-slate-400">
                      {ach.isUnlocked ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Reset all statistics?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              This will reset your scores, streak, unlocked levels, and mistake vault back to default. This cannot be undone.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetConfirm(false);
                }}
                className="flex-1 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors"
              >
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
