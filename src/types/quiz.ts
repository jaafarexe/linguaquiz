export interface Language {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  speechLang: string;
  accentColor: string;
  description: string;
}

export interface ExampleSentence {
  foreign: string;
  english: string;
}

export interface Question {
  id: string;
  languageId: string;
  level: number; // 1 to 5
  category: string;
  prompt: string;
  targetWord: string;
  phonetic?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  exampleSentence: ExampleSentence;
}

export interface LevelInfo {
  level: number;
  title: string;
  subtitle: string;
  minAccuracyToUnlockNext: number; // e.g. 70
  iconName: string;
  description: string;
}

export interface QuizAnswerRecord {
  question: Question;
  selectedIndex: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizSessionSummary {
  languageId: string;
  level: number;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  score: number;
  maxStreak: number;
  xpEarned: number;
  starsEarned: number;
  answers: QuizAnswerRecord[];
  isNewUnlock: boolean;
  date: string;
}

export interface LevelScoreRecord {
  highScore: number;
  highestAccuracy: number;
  stars: number;
  timesPlayed: number;
  completedAt?: string;
}

export interface UserProgress {
  unlockedLevels: Record<string, number[]>; // languageId -> array of unlocked levels (e.g. [1, 2])
  levelScores: Record<string, LevelScoreRecord>; // key: `${languageId}_${level}`
  totalQuizzesTaken: number;
  totalCorrectAnswers: number;
  totalAnswered: number;
  currentGlobalStreak: number;
  highestGlobalStreak: number;
  totalXp: number;
  mistakeVault: Question[]; // distinct words missed across sessions
  soundEnabled: boolean;
  timerSeconds: number; // 0 for untimed, 15, 25, 40
  selectedLanguageId: string;
}
