import React, { useState } from 'react';
import { UserProgress } from '../types/quiz';
import { LANGUAGES, LEVEL_INFOS } from '../data/quizData';
import { Lock, Play, Star, CheckCircle, Award, Compass, Coffee, MapPin, BookOpen } from 'lucide-react';

interface LevelsViewProps {
  progress: UserProgress;
  onSelectLanguage: (langId: string) => void;
  onStartQuiz: (langId: string, level: number) => void;
}

const LEVEL_ICONS: Record<string, React.ElementType> = {
  Compass,
  Coffee,
  MapPin,
  BookOpen,
  Award
};

export const LevelsView: React.FC<LevelsViewProps> = ({
  progress,
  onSelectLanguage,
  onStartQuiz
}) => {
  const [activeLangId, setActiveLangId] = useState(progress.selectedLanguageId);
  const activeLang = LANGUAGES.find(l => l.id === activeLangId) || LANGUAGES[0];
  const unlockedLevels = progress.unlockedLevels[activeLang.id] || [1];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="text-xs font-semibold text-sky-400 mb-1">
            CURRICULUM ARCHITECTURE & LEVEL PROGRESSION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Learning Pathways & Progression
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Each tier introduces higher vocabulary depth. Score at least 70% in any tier to unlock the next progressive level.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
          {LANGUAGES.map(lang => {
            const isSelected = lang.id === activeLang.id;
            const langUnlocked = progress.unlockedLevels[lang.id] || [1];

            return (
              <button
                key={lang.id}
                onClick={() => {
                  setActiveLangId(lang.id);
                  onSelectLanguage(lang.id);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
                <span className="font-mono text-2xs opacity-75">
                  ({langUnlocked.length}/5)
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progressive Step Pathway Map */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 my-6">
        {LEVEL_INFOS.map((lvl, index) => {
          const isUnlocked = unlockedLevels.includes(lvl.level);
          const scoreRecord = progress.levelScores[`${activeLang.id}_${lvl.level}`];
          const isPassed = scoreRecord && scoreRecord.highestAccuracy >= 70;
          const Icon = LEVEL_ICONS[lvl.iconName] || Compass;

          return (
            <div key={lvl.level} className="relative group">
              {/* Timeline Node Badge */}
              <div
                className={`absolute -left-[37px] sm:-left-[45px] top-6 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                  isPassed
                    ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                    : isUnlocked
                    ? 'bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-500'
                }`}
              >
                {isPassed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : isUnlocked ? (
                  <span className="font-mono text-xs font-bold">{lvl.level}</span>
                ) : (
                  <Lock className="w-4 h-4" />
                )}
              </div>

              {/* Main Level Card */}
              <div
                className={`rounded-2xl border p-6 transition-all ${
                  isUnlocked
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-xl'
                    : 'bg-slate-950/50 border-slate-800/40 opacity-70'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                        Level 0{lvl.level}
                      </span>
                      {scoreRecord && (
                        <div className="flex items-center gap-1">
                          {[1, 2, 3].map(s => (
                            <Star
                              key={s}
                              className={`w-3 h-3 ${
                                s <= scoreRecord.stars
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {lvl.title}
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">{lvl.subtitle}</p>
                    <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
                      {lvl.description}
                    </p>
                  </div>

                  {/* Actions & High Score details */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                    <div className="text-right">
                      {scoreRecord ? (
                        <div className="text-xs">
                          <span className="text-slate-400">High Score: </span>
                          <span className="font-mono font-bold text-white">
                            {scoreRecord.highScore}
                          </span>
                          <span className="text-emerald-400 ml-1.5 font-mono">
                            ({scoreRecord.highestAccuracy}%)
                          </span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 font-sans">
                          {isUnlocked ? 'Not attempted yet' : 'Locked'}
                        </span>
                      )}
                    </div>

                    {isUnlocked ? (
                      <button
                        onClick={() => onStartQuiz(activeLang.id, lvl.level)}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-md shadow-sky-500/25 transition-all flex items-center gap-2 active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{scoreRecord ? 'Replay Level' : 'Start Level'}</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Requires Level {lvl.level - 1} ≥70%</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
