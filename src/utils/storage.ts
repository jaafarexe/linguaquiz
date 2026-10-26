import { UserProgress, QuizSessionSummary, Question } from '../types/quiz';
import { LANGUAGES } from '../data/quizData';

const STORAGE_KEY = 'linguaquiz_user_progress_v1';

export function getDefaultProgress(): UserProgress {
  const initialUnlocked: Record<string, number[]> = {};
  LANGUAGES.forEach(lang => {
    // Level 1 is always unlocked by default for each language
    initialUnlocked[lang.id] = [1];
  });

  return {
    unlockedLevels: initialUnlocked,
    levelScores: {},
    totalQuizzesTaken: 0,
    totalCorrectAnswers: 0,
    totalAnswered: 0,
    currentGlobalStreak: 0,
    highestGlobalStreak: 0,
    totalXp: 0,
    mistakeVault: [],
    soundEnabled: true,
    timerSeconds: 20, // default 20s per question
    selectedLanguageId: 'es'
  };
}

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return getDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);

    // Merge with defaults to guard against missing fields
    const defaults = getDefaultProgress();
    return {
      ...defaults,
      ...parsed,
      unlockedLevels: {
        ...defaults.unlockedLevels,
        ...(parsed.unlockedLevels || {})
      },
      levelScores: parsed.levelScores || {},
      mistakeVault: parsed.mistakeVault || []
    };
  } catch {
    return getDefaultProgress();
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // LocalStorage write error fallback
  }
}

export function recordQuizCompletion(
  current: UserProgress,
  summary: QuizSessionSummary
): { updated: UserProgress; isNewLevelUnlocked: boolean } {
  const updated = { ...current };

  // 1. Update basic aggregates
  updated.totalQuizzesTaken += 1;
  updated.totalCorrectAnswers += summary.correctAnswers;
  updated.totalAnswered += summary.totalQuestions;
  updated.totalXp += summary.xpEarned;

  // 2. Global streak updates
  if (summary.accuracy >= 70) {
    updated.currentGlobalStreak += 1;
    if (updated.currentGlobalStreak > updated.highestGlobalStreak) {
      updated.highestGlobalStreak = updated.currentGlobalStreak;
    }
  } else {
    updated.currentGlobalStreak = 0;
  }

  // 3. Level score and high scores
  const scoreKey = `${summary.languageId}_${summary.level}`;
  const existingScore = updated.levelScores[scoreKey] || {
    highScore: 0,
    highestAccuracy: 0,
    stars: 0,
    timesPlayed: 0
  };

  updated.levelScores[scoreKey] = {
    highScore: Math.max(existingScore.highScore, summary.score),
    highestAccuracy: Math.max(existingScore.highestAccuracy, summary.accuracy),
    stars: Math.max(existingScore.stars, summary.starsEarned),
    timesPlayed: existingScore.timesPlayed + 1,
    completedAt: new Date().toISOString()
  };

  // 4. Progressive level unlocking: unlock next level if passed with >= 70% accuracy
  let isNewLevelUnlocked = false;
  const currentUnlocked = updated.unlockedLevels[summary.languageId] || [1];
  const nextLevel = summary.level + 1;

  if (summary.accuracy >= 70 && nextLevel <= 5 && !currentUnlocked.includes(nextLevel)) {
    updated.unlockedLevels[summary.languageId] = [...currentUnlocked, nextLevel].sort((a, b) => a - b);
    isNewLevelUnlocked = true;
  }

  // 5. Update Mistake Vault
  const missedQuestions: Question[] = summary.answers
    .filter(a => !a.isCorrect)
    .map(a => a.question);

  if (missedQuestions.length > 0) {
    const existingVault = updated.mistakeVault || [];
    const existingIds = new Set(existingVault.map(q => q.id));

    const newlyMissed = missedQuestions.filter(q => !existingIds.has(q.id));
    updated.mistakeVault = [...newlyMissed, ...existingVault];
  }

  saveUserProgress(updated);
  return { updated, isNewLevelUnlocked };
}

export function removeWordFromMistakeVault(progress: UserProgress, questionId: string): UserProgress {
  const updated: UserProgress = {
    ...progress,
    mistakeVault: progress.mistakeVault.filter(q => q.id !== questionId)
  };
  saveUserProgress(updated);
  return updated;
}
