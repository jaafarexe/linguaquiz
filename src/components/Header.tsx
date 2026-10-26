import React from 'react';
import { Volume2, VolumeX, Flame } from 'lucide-react';

interface HeaderProps {
  activeTab: 'hub' | 'levels' | 'mistakes' | 'stats';
  onSelectTab: (tab: 'hub' | 'levels' | 'mistakes' | 'stats') => void;
  onQuickPlay: () => void;
  streak: number;
  mistakesCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onQuickPlay,
  streak,
  mistakesCount,
  soundEnabled,
  onToggleSound
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark */}
        <button
          onClick={() => onSelectTab('hub')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-lg group-hover:bg-sky-500/25 transition-colors">
            LQ
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group-hover:text-sky-300 transition-colors">
              LinguaQuiz
            </span>
          </div>
        </button>

        {/* Zone 2: 4 single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onSelectTab('hub')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'hub'
                ? 'text-sky-400 font-semibold border-b-2 border-sky-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Quiz Hub
          </button>
          <button
            onClick={() => onSelectTab('levels')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'levels'
                ? 'text-sky-400 font-semibold border-b-2 border-sky-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Levels & Progression
          </button>
          <button
            onClick={() => onSelectTab('mistakes')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 ${
              activeTab === 'mistakes'
                ? 'text-sky-400 font-semibold border-b-2 border-sky-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Mistake Vault</span>
            {mistakesCount > 0 && (
              <span className="text-xs font-mono px-1.5 py-0.2 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded">
                {mistakesCount}
              </span>
            )}
          </button>
          <button
            onClick={() => onSelectTab('stats')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'stats'
                ? 'text-sky-400 font-semibold border-b-2 border-sky-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Stats & Records
          </button>
        </nav>

        {/* Zone 3: 1 primary action + unobtrusive controls */}
        <div className="flex items-center gap-3 shrink-0">
          {streak > 0 && (
            <div
              title={`${streak} day streak!`}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/25 rounded-md"
            >
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
              <span className="font-mono tabular-nums">{streak}</span>
              <span className="text-amber-300/70">Streak</span>
            </div>
          )}

          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute audio' : 'Unmute audio'}
            title={soundEnabled ? 'Sound Enabled' : 'Sound Muted'}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-sky-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          <button
            onClick={onQuickPlay}
            className="px-4 py-2 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg shadow-sm shadow-sky-500/25 transition-all whitespace-nowrap shrink-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Quick Play
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden items-center justify-around border-t border-slate-800/60 py-2 px-2 text-xs font-medium bg-slate-900/60">
        <button
          onClick={() => onSelectTab('hub')}
          className={`px-2 py-1 rounded ${activeTab === 'hub' ? 'text-sky-400 font-semibold' : 'text-slate-400'}`}
        >
          Hub
        </button>
        <button
          onClick={() => onSelectTab('levels')}
          className={`px-2 py-1 rounded ${activeTab === 'levels' ? 'text-sky-400 font-semibold' : 'text-slate-400'}`}
        >
          Levels
        </button>
        <button
          onClick={() => onSelectTab('mistakes')}
          className={`px-2 py-1 rounded ${activeTab === 'mistakes' ? 'text-sky-400 font-semibold' : 'text-slate-400'}`}
        >
          Vault {mistakesCount > 0 ? `(${mistakesCount})` : ''}
        </button>
        <button
          onClick={() => onSelectTab('stats')}
          className={`px-2 py-1 rounded ${activeTab === 'stats' ? 'text-sky-400 font-semibold' : 'text-slate-400'}`}
        >
          Stats
        </button>
      </div>
    </header>
  );
};
