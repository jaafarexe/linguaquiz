import React from 'react';
import { Language, LevelInfo, UserProgress } from '../types/quiz';
import { LANGUAGES, LEVEL_INFOS } from '../data/quizData';
import { Play, Lock, CheckCircle2, Star, Flame, Trophy, Award, Zap, Compass, Coffee, MapPin, BookOpen, Clock } from 'lucide-react';

interface HomeScreenProps {
  progress: UserProgress;
  onSelectLanguage: (langId: string) => void;
  onStartQuiz: (level: number) => void;
  onOpenMistakeVault: () => void;
  onUpdateTimerSetting: (seconds: number) => void;
}

const LEVEL_ICONS: Record<string, React.ElementType> = {
  Compass,
  Coffee,
  MapPin,
  BookOpen,
  Award
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
  progress,
  onSelectLanguage,
  onStartQuiz,
  onOpenMistakeVault,
  onUpdateTimerSetting
}) => {
  const currentLang = LANGUAGES.find(l => l.id === progress.selectedLanguageId) || LANGUAGES[0];
  const unlockedForLang = progress.unlockedLevels[currentLang.id] || [1];
  const highestUnlocked = Math.max(...unlockedForLang);

  const totalLanguagesStarted = Object.keys(progress.unlockedLevels).length;
  const overallMasteryPercent = Math.min(
    100,
    Math.round((unlockedForLang.length / LEVEL_INFOS.length) * 100)
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 animate-fade-in">
      {/* Top Hero: Language Switcher and Welcome */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
              <span>LINGUAQUIZ LEARNING SUITE</span>
              <span>·</span>
              <span className="font-mono">{currentLang.nativeName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Master vocabulary in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                {currentLang.name}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {currentLang.description} Progress through adaptive tiers, maintain your streak, and sharpen pronunciation with instant feedback.
            </p>

            {/* Language Selector Strip */}
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-2.5">
                Switch Language:
              </span>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map(lang => {
                  const isSelected = lang.id === currentLang.id;
                  const langUnlocked = progress.unlockedLevels[lang.id] || [1];

                  return (
                    <button
                      key={lang.id}
                      onClick={() => onSelectLanguage(lang.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-150 border focus:outline-none ${
                        isSelected
                          ? 'bg-sky-500/20 border-sky-400 text-white shadow-md shadow-sky-500/20 ring-1 ring-sky-400'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.name}</span>
                      <span className="text-2xs font-mono text-slate-400">
                        Lvl {Math.max(...langUnlocked)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Start Card */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shrink-0 lg:w-96 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Current Pathway</span>
                <span className="font-mono text-sky-400">Level {highestUnlocked} of 5</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {LEVEL_INFOS[highestUnlocked - 1]?.title}
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                {LEVEL_INFOS[highestUnlocked - 1]?.subtitle}
              </p>

              {/* Progress Bar for Current Language */}
              <div className="space-y-1.5 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Language Progress</span>
                  <span className="font-mono font-semibold text-slate-200">{overallMasteryPercent}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-sky-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${overallMasteryPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => onStartQuiz(highestUnlocked)}
              className="w-full py-3.5 px-4 text-sm font-bold text-white bg-sky-500 hover:bg-sky-400 rounded-xl shadow-lg shadow-sky-500/30 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Continue Level {highestUnlocked}</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Overview Strip: 4 items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Flame className="w-5 h-5 fill-amber-400" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Active Streak</span>
            <span className="text-xl font-extrabold text-white font-mono tabular-nums">
              {progress.currentGlobalStreak}
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Total Experience</span>
            <span className="text-xl font-extrabold text-white font-mono tabular-nums">
              {progress.totalXp} XP
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Questions Solved</span>
            <span className="text-xl font-extrabold text-white font-mono tabular-nums">
              {progress.totalCorrectAnswers}
            </span>
          </div>
        </div>

        <div
          onClick={onOpenMistakeVault}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-slate-700 transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Mistake Vault</span>
              <span className="text-xl font-extrabold text-white font-mono tabular-nums">
                {progress.mistakeVault.length}
              </span>
            </div>
          </div>
          <span className="text-xs text-sky-400 font-medium group-hover:translate-x-0.5 transition-transform">
            Review →
          </span>
        </div>
      </div>

      {/* Progressive Levels Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>{currentLang.name} Progressive Levels</span>
              <span className="text-xs font-normal text-slate-400">
                (Unlock each by scoring 70%+)
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Select any unlocked tier to practice, or replay to boost high scores and earn 3 gold stars.
            </p>
          </div>

          {/* Question Timer Setting Bar */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1.5 rounded-xl self-start sm:self-auto">
            <Clock className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
            <span className="text-xs text-slate-400 pr-1">Timer:</span>
            {[
              { label: '15s Speed', val: 15 },
              { label: '20s Standard', val: 20 },
              { label: '30s Relaxed', val: 30 },
              { label: 'Untimed', val: 0 }
            ].map(opt => (
              <button
                key={opt.val}
                onClick={() => onUpdateTimerSetting(opt.val)}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  progress.timerSeconds === opt.val
                    ? 'bg-sky-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEVEL_INFOS.map(lvl => {
            const isUnlocked = unlockedForLang.includes(lvl.level);
            const scoreRecord = progress.levelScores[`${currentLang.id}_${lvl.level}`];
            const IconComponent = LEVEL_ICONS[lvl.iconName] || Compass;

            return (
              <div
                key={lvl.level}
                className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-200 ${
                  isUnlocked
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md'
                    : 'bg-slate-950/40 border-slate-800/40 opacity-75'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-2 rounded-xl ${
                          isUnlocked
                            ? 'bg-sky-500/15 text-sky-400 border border-sky-500/20'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400">
                        Level {lvl.level}
                      </span>
                    </div>

                    {isUnlocked ? (
                      <div className="flex items-center gap-1">
                        {[1, 2, 3].map(s => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              scoreRecord && s <= scoreRecord.stars
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-700'
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Locked</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{lvl.title}</h3>
                  <p className="text-xs text-slate-400 mb-2">{lvl.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  {isUnlocked ? (
                    <>
                      <div className="text-xs text-slate-400">
                        {scoreRecord ? (
                          <span>
                            Best: <strong className="text-white font-mono">{scoreRecord.highScore}</strong> pts ({scoreRecord.highestAccuracy}%)
                          </span>
                        ) : (
                          <span>Ready to play</span>
                        )}
                      </div>

                      <button
                        onClick={() => onStartQuiz(lvl.level)}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-500 text-white hover:bg-sky-400 transition-colors flex items-center gap-1.5 focus:outline-none"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>{scoreRecord ? 'Replay' : 'Start'}</span>
                      </button>
                    </>
                  ) : (
                    <div className="w-full text-xs text-slate-400 flex items-center justify-between">
                      <span>Pass Level {lvl.level - 1} with ≥70%</span>
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
