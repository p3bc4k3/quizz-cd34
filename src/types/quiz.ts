export enum Category {
  HISTOIRE              = 'HISTOIRE',
  HISTOIRE_FRANCE       = 'HISTOIRE_FRANCE',
  CODE_MORAL            = 'CODE_MORAL',
  REGLES_DOJO           = 'REGLES_DOJO',
  GRADES_CEINTURES      = 'GRADES_CEINTURES',
  GRADES_CLUB           = 'GRADES_CLUB',           // portail — ne contient pas de questions
  GRADE_BLANCHE_JAUNE   = 'GRADE_BLANCHE_JAUNE',
  GRADE_JAUNE           = 'GRADE_JAUNE',
  GRADE_JAUNE_ORANGE    = 'GRADE_JAUNE_ORANGE',
  GRADE_ORANGE          = 'GRADE_ORANGE',
  GRADE_ORANGE_VERTE    = 'GRADE_ORANGE_VERTE',
  GRADE_VERTE           = 'GRADE_VERTE',
  GRADE_BLEUE           = 'GRADE_BLEUE',
  GRADE_MARRON          = 'GRADE_MARRON',
  VOCABULAIRE_JAPONAIS  = 'VOCABULAIRE_JAPONAIS',
  ARBITRAGE_VIE         = 'ARBITRAGE_VIE',
}

export const BELT_CATEGORIES: Category[] = [
  Category.GRADE_BLANCHE_JAUNE,
  Category.GRADE_JAUNE,
  Category.GRADE_JAUNE_ORANGE,
  Category.GRADE_ORANGE,
  Category.GRADE_ORANGE_VERTE,
  Category.GRADE_VERTE,
  Category.GRADE_BLEUE,
  Category.GRADE_MARRON,
]

export const THEME_CATEGORIES: Category[] = Object.values(Category).filter(
  c => !BELT_CATEGORIES.includes(c),
)

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
  [Category.HISTOIRE_FRANCE]:      'Judo en France',
  [Category.CODE_MORAL]:           'Code moral',
  [Category.REGLES_DOJO]:          'Règles du dojo',
  [Category.GRADES_CEINTURES]:     'Grades et ceintures',
  [Category.GRADES_CLUB]:          'Programme des grades',
  [Category.GRADE_BLANCHE_JAUNE]:  'Ceinture blanche-jaune',
  [Category.GRADE_JAUNE]:          'Ceinture jaune',
  [Category.GRADE_JAUNE_ORANGE]:   'Ceinture jaune-orange',
  [Category.GRADE_ORANGE]:         'Ceinture orange',
  [Category.GRADE_ORANGE_VERTE]:   'Ceinture orange-verte',
  [Category.GRADE_VERTE]:          'Ceinture verte',
  [Category.GRADE_BLEUE]:          'Ceinture bleue',
  [Category.GRADE_MARRON]:         'Ceinture marron',
  [Category.VOCABULAIRE_JAPONAIS]: 'Vocabulaire japonais',
  [Category.ARBITRAGE_VIE]:        'Arbitrage & vie du club',
}

export const CATEGORY_EMOJI: Record<Category, string> = {
  [Category.HISTOIRE]:             '📜',
  [Category.HISTOIRE_FRANCE]:      '🇫🇷',
  [Category.CODE_MORAL]:           '🤝',
  [Category.REGLES_DOJO]:          '🏯',
  [Category.GRADES_CEINTURES]:     '🥋',
  [Category.GRADES_CLUB]:          '📋',
  [Category.GRADE_BLANCHE_JAUNE]:  '⬜🟡',
  [Category.GRADE_JAUNE]:          '🟡',
  [Category.GRADE_JAUNE_ORANGE]:   '🟡🟠',
  [Category.GRADE_ORANGE]:         '🟠',
  [Category.GRADE_ORANGE_VERTE]:   '🟠🟢',
  [Category.GRADE_VERTE]:          '🟢',
  [Category.GRADE_BLEUE]:          '🔵',
  [Category.GRADE_MARRON]:         '🟤',
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
