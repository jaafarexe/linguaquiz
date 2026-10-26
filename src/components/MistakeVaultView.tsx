import React, { useState } from 'react';
import { Question } from '../types/quiz';
import { LANGUAGES } from '../data/quizData';
import { Volume2, Trash2, Play, BookOpen, CheckCircle, Search } from 'lucide-react';
import { speakWord } from '../utils/audio';

interface MistakeVaultViewProps {
  mistakes: Question[];
  onRemoveWord: (questionId: string) => void;
  onLaunchPracticeQuiz: (questions: Question[]) => void;
  onBackToHub: () => void;
}

export const MistakeVaultView: React.FC<MistakeVaultViewProps> = ({
  mistakes,
  onRemoveWord,
  onLaunchPracticeQuiz,
  onBackToHub
}) => {
  const [selectedLangFilter, setSelectedLangFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMistakes = mistakes.filter(q => {
    const matchesLang = selectedLangFilter === 'all' || q.languageId === selectedLangFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      q.targetWord.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options[q.correctIndex].toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLang && matchesSearch;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
            <span>SPACED REPETITION & ERROR RETRIEVAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Mistake Vault
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Every word you miss is saved here automatically. Turn your stumbling blocks into mastery by testing yourself on these specific words.
          </p>
        </div>

        {mistakes.length > 0 && (
          <button
            onClick={() => onLaunchPracticeQuiz(filteredMistakes.length > 0 ? filteredMistakes : mistakes)}
            className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-rose-500 hover:bg-rose-400 shadow-lg shadow-rose-500/25 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Practice Vault Deck ({filteredMistakes.length})</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Language Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setSelectedLangFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedLangFilter === 'all'
                ? 'bg-sky-500 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Languages ({mistakes.length})
          </button>
          {LANGUAGES.map(l => {
            const count = mistakes.filter(m => m.languageId === l.id).length;
            if (count === 0 && selectedLangFilter !== l.id) return null;
            return (
              <button
                key={l.id}
                onClick={() => setSelectedLangFilter(l.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  selectedLangFilter === l.id
                    ? 'bg-sky-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.name}</span>
                <span className="font-mono text-2xs opacity-80">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search words..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* List of Missed Words */}
      {filteredMistakes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMistakes.map(item => {
            const lang = LANGUAGES.find(l => l.id === item.languageId);

            return (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{lang?.flag}</span>
                      <span className="font-medium text-slate-300">{lang?.name}</span>
                      <span>·</span>
                      <span>Level {item.level}</span>
                      <span>·</span>
                      <span className="text-sky-400">{item.category}</span>
                    </div>

                    <button
                      onClick={() => onRemoveWord(item.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                      title="Mark as Mastered and Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.targetWord}
                    </h3>
                    <button
                      onClick={() => speakWord(item.targetWord, lang?.speechLang || 'en-US')}
                      className="p-1 text-slate-400 hover:text-sky-400 rounded transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {item.phonetic && (
                    <p className="text-xs font-mono text-slate-400 mb-2">
                      {item.phonetic}
                    </p>
                  )}

                  <div className="text-xs text-slate-300 mb-3 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5">Meaning:</span>
                    <span className="font-semibold text-emerald-400 text-sm">
                      {item.options[item.correctIndex]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {item.explanation}
                  </p>

                  <div className="text-2xs bg-slate-950/40 p-2 rounded border border-slate-800/60 text-slate-300 italic">
                    "{item.exampleSentence.foreign}" — {item.exampleSentence.english}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-2xs text-slate-500">
                    Tap trash icon when you have fully mastered this term.
                  </span>
                  <button
                    onClick={() => onRemoveWord(item.id)}
                    className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Mastered</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Vault is Clear!</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            {searchQuery
              ? 'No words matched your filter criteria.'
              : 'You do not have any unresolved mistakes. Take a new quiz to discover challenging vocabulary words.'}
          </p>
          <button
            onClick={onBackToHub}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors"
          >
            Start a Quiz
          </button>
        </div>
      )}
    </div>
  );
};
