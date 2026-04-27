export enum Category {
  HISTOIRE             = 'HISTOIRE',
  CODE_MORAL           = 'CODE_MORAL',
  REGLES_DOJO          = 'REGLES_DOJO',
  GRADES_CEINTURES     = 'GRADES_CEINTURES',
  VOCABULAIRE_JAPONAIS = 'VOCABULAIRE_JAPONAIS',
  ARBITRAGE_VIE        = 'ARBITRAGE_VIE',
}

export enum Level {
  DEBUTANT      = 'DEBUTANT',
  INTERMEDIAIRE = 'INTERMEDIAIRE',
  CONFIRME      = 'CONFIRME',
}

export enum QuizMode {
  QUICK    = 'QUICK',
  BY_THEME = 'BY_THEME',
  BY_LEVEL = 'BY_LEVEL',
}

export interface Question {
  id: string
  text: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
  explanation: string
  category: Category
  level: Level
}

export interface RevisionCard {
  id: string
  title: string
  content: string
  category: Category
  emoji: string
}

export interface QuizConfig {
  mode: QuizMode
  category?: Category
  level?: Level
}

export interface AnswerRecord {
  questionId: string
  selectedIndex: 0 | 1 | 2 | 3
  isCorrect: boolean
}

export interface QuizSession {
  config: QuizConfig
  questions: Question[]
  answers: AnswerRecord[]
  startedAt: number
}

export const CATEGORY_LABELS: Record<Category, string> = {
  [Category.HISTOIRE]:             'Histoire du judo',
  [Category.CODE_MORAL]:           'Code moral',
  [Category.REGLES_DOJO]:          'Règles du dojo',
  [Category.GRADES_CEINTURES]:     'Grades et ceintures',
  [Category.VOCABULAIRE_JAPONAIS]: 'Vocabulaire japonais',
  [Category.ARBITRAGE_VIE]:        'Arbitrage & vie du club',
}

export const CATEGORY_EMOJI: Record<Category, string> = {
  [Category.HISTOIRE]:             '📜',
  [Category.CODE_MORAL]:           '🤝',
  [Category.REGLES_DOJO]:          '🏯',
  [Category.GRADES_CEINTURES]:     '🥋',
  [Category.VOCABULAIRE_JAPONAIS]: '🇯🇵',
  [Category.ARBITRAGE_VIE]:        '🏅',
}

export const LEVEL_LABELS: Record<Level, string> = {
  [Level.DEBUTANT]:      'Débutant',
  [Level.INTERMEDIAIRE]: 'Intermédiaire',
  [Level.CONFIRME]:      'Confirmé',
}

export const LEVEL_EMOJI: Record<Level, string> = {
  [Level.DEBUTANT]:      '⬜',
  [Level.INTERMEDIAIRE]: '🟡',
  [Level.CONFIRME]:      '⬛',
}
