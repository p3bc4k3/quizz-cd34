import { Category, Level, QuizMode } from '../types/quiz'
import type { Question, QuizConfig } from '../types/quiz'

export const ALL_QUESTIONS: Question[] = [

  // ═══════════════════════════════════════════════
  // HISTOIRE DU JUDO  (h01–h10)
  // ═══════════════════════════════════════════════
  {
    id: 'h01',
    text: 'En quelle année Jigoro Kano a-t-il fondé le judo ?',
    options: ['1882', '1895', '1871', '1900'],
    correctIndex: 0,
    explanation: 'Jigoro Kano a créé le judo en 1882 au temple Eisho-ji de Tokyo, à partir du jiu-jitsu.',
    category: Category.HISTOIRE,
    level: Level.DEBUTANT,
  },
  {
    id: 'h02',
    text: 'Quel est le nom du fondateur du judo ?',
    options: ['Masahiko Kimura', 'Jigoro Kano', 'Yamashita Yasuhiro', 'Keiko Fukuda'],
    correctIndex: 1,
    explanation: 'Jigoro Kano (1860-1938) est le créateur du judo. Il fut aussi le premier Asiatique membre du Comité International Olympique.',
    category: Category.HISTOIRE,
    level: Level.DEBUTANT,
  },
  {
    id: 'h03',
    text: 'Le judo est devenu un sport olympique pour les hommes lors des Jeux de :',
    options: ['Rome 1960', 'Tokyo 1964', 'Mexico 1968', 'Munich 1972'],
    correctIndex: 1,
    explanation: 'Le judo a fait son entrée aux Jeux Olympiques à Tokyo en 1964, sur la terre même de ses origines.',
    category: Category.HISTOIRE,
    level: Level.DEBUTANT,
  },
  {
    id: 'h04',
    text: 'Que signifie le mot "judo" en japonais ?',
    options: ['La voie de la force', 'La voie souple', 'La voie du combat', 'La voie du silence'],
    correctIndex: 1,
    explanation: '"Ju" signifie souple/doux et "Do" signifie voie/chemin. Le judo est donc "la voie souple".',
    category: Category.HISTOIRE,
    level: Level.DEBUTANT,
  },
  {
    id: 'h05',
    text: 'Comment s\'appelle le premier dojo de judo fondé par Kano ?',
    options: ['Budokan', 'Kodokan', 'Shogun-kan', 'Nippon Budokan'],
    correctIndex: 1,
    explanation: 'Le Kodokan, fondé en 1882, est encore aujourd\'hui le centre mondial du judo. "Ko" = leçon, "do" = voie, "kan" = bâtiment.',
    category: Category.HISTOIRE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'h06',
    text: 'Quelle est la fédération française qui gère le judo ?',
    options: ['FFJDA', 'FFJ', 'FFJUDO', 'FFSA'],
    correctIndex: 0,
    explanation: 'La Fédération Française de Judo, Jiu-jitsu, Kendo et Disciplines Associées (FFJDA) est la structure nationale.',
    category: Category.HISTOIRE,
    level: Level.DEBUTANT,
  },
  {
    id: 'h07',
    text: 'Le judo féminin a été introduit aux Jeux Olympiques lors de quelle édition ?',
    options: ['Los Angeles 1984', 'Séoul 1988', 'Barcelone 1992', 'Atlanta 1996'],
    correctIndex: 2,
    explanation: 'Les femmes ont pu concourir en judo aux JO pour la première fois à Barcelone en 1992.',
    category: Category.HISTOIRE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'h08',
    text: 'Quel champion français a remporté la médaille d\'or aux JO de Paris 2024 en -73 kg ?',
    options: ['Guillaume Élias', 'Luka Mkheidze', 'Teddy Riner', 'Joan-Benjamin Gaba'],
    correctIndex: 0,
    explanation: 'Guillaume Élias a décroché l\'or olympique à Paris 2024 dans la catégorie -73 kg, une victoire historique pour le judo français.',
    category: Category.HISTOIRE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'h09',
    text: 'Teddy Riner a remporté combien de titres de champion du monde ?',
    options: ['8', '10', '12', '7'],
    correctIndex: 1,
    explanation: 'Teddy Riner est 10 fois champion du monde, un record absolu dans l\'histoire du judo masculin.',
    category: Category.HISTOIRE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'h10',
    text: 'De quel art martial le judo est-il directement issu ?',
    options: ['Karaté', 'Aïkido', 'Jiu-jitsu', 'Sumo'],
    correctIndex: 2,
    explanation: 'Kano a sélectionné les meilleures techniques du jiu-jitsu traditionnel pour créer le judo, en supprimant les techniques les plus dangereuses.',
    category: Category.HISTOIRE,
    level: Level.DEBUTANT,
  },

  // ═══════════════════════════════════════════════
  // CODE MORAL  (cm01–cm10)
  // ═══════════════════════════════════════════════
  {
    id: 'cm01',
    text: 'Combien de valeurs composent le code moral du judo ?',
    options: ['6', '7', '8', '10'],
    correctIndex: 2,
    explanation: 'Le code moral du judo comprend 8 valeurs : Politesse, Courage, Sincérité, Honneur, Modestie, Respect, Contrôle de soi et Amitié.',
    category: Category.CODE_MORAL,
    level: Level.DEBUTANT,
  },
  {
    id: 'cm02',
    text: 'Quelle valeur du code moral signifie "Rei" en japonais ?',
    options: ['Courage', 'Respect', 'Politesse', 'Honneur'],
    correctIndex: 2,
    explanation: '"Rei" correspond à la Politesse. Elle se manifeste notamment par le salut (le même mot) au dojo.',
    category: Category.CODE_MORAL,
    level: Level.DEBUTANT,
  },
  {
    id: 'cm03',
    text: 'Quelle valeur du code moral correspond à "Yuki" en japonais ?',
    options: ['Amitié', 'Modestie', 'Courage', 'Sincérité'],
    correctIndex: 2,
    explanation: '"Yuki" signifie Courage. Au judo, cela signifie oser, persévérer, affronter ses peurs et ses difficultés.',
    category: Category.CODE_MORAL,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'cm04',
    text: 'La valeur "Contrôle de soi" nous apprend à :',
    options: [
      'Battre son adversaire rapidement',
      'Gérer ses émotions et réactions en toutes circonstances',
      'Maîtriser techniquement toutes les prises',
      'Obéir toujours à son professeur',
    ],
    correctIndex: 1,
    explanation: 'Le contrôle de soi ("Jiko seigyo") invite le judoka à maîtriser ses émotions, sa colère, son impatience, aussi bien sur le tatami que dans la vie.',
    category: Category.CODE_MORAL,
    level: Level.DEBUTANT,
  },
  {
    id: 'cm05',
    text: 'Quelle valeur du code moral est symbolisée par l\'honnêteté et la franchise ?',
    options: ['Honneur', 'Sincérité', 'Modestie', 'Politesse'],
    correctIndex: 1,
    explanation: 'La Sincérité ("Makoto") pousse le judoka à être honnête envers lui-même et les autres, sans tricherie ni mensonge.',
    category: Category.CODE_MORAL,
    level: Level.DEBUTANT,
  },
  {
    id: 'cm06',
    text: 'Quelle est la différence entre "Respect" et "Politesse" dans le code moral ?',
    options: [
      'Ce sont deux mots pour la même chose',
      'La politesse est une forme extérieure, le respect est une attitude intérieure profonde',
      'Le respect ne concerne que les adversaires',
      'La politesse s\'applique uniquement aux professeurs',
    ],
    correctIndex: 1,
    explanation: 'La Politesse (Rei) concerne les formes visibles comme le salut. Le Respect (Sonkei) est une attitude profonde envers les personnes, les lieux et les traditions.',
    category: Category.CODE_MORAL,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'cm07',
    text: 'La valeur "Amitié" dans le judo signifie :',
    options: [
      'Ne jamais combattre ses amis',
      'Créer des liens durables avec ses partenaires d\'entraînement',
      'Inviter des amis au dojo',
      'Prêter ses équipements',
    ],
    correctIndex: 1,
    explanation: '"Yūjō" (Amitié) incarne l\'esprit de camaraderie unique au judo : l\'adversaire devient un partenaire avec qui on grandit.',
    category: Category.CODE_MORAL,
    level: Level.DEBUTANT,
  },
  {
    id: 'cm08',
    text: 'La Modestie dans le judo, c\'est :',
    options: [
      'Ne jamais parler de ses victoires',
      'Accepter humblement ses succès ET ses échecs',
      'Laisser toujours gagner les autres',
      'Ne pas se fixer d\'objectifs',
    ],
    correctIndex: 1,
    explanation: 'La Modestie ("Kenjo") ne consiste pas à s\'effacer, mais à garder les pieds sur terre, qu\'on gagne ou qu\'on perde.',
    category: Category.CODE_MORAL,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'cm09',
    text: 'Quel terme japonais désigne l\'Honneur dans le code moral ?',
    options: ['Meiyo', 'Makoto', 'Sonkei', 'Yūjō'],
    correctIndex: 0,
    explanation: '"Meiyo" signifie Honneur. Il implique d\'agir avec intégrité, de tenir ses promesses et de respecter les règles.',
    category: Category.CODE_MORAL,
    level: Level.CONFIRME,
  },
  {
    id: 'cm10',
    text: 'Quelle valeur du code moral s\'applique quand un judoka reconnaît sa défaite sans se mettre en colère ?',
    options: ['Courage', 'Sincérité', 'Contrôle de soi', 'Honneur'],
    correctIndex: 2,
    explanation: 'Le Contrôle de soi (Jiko seigyo) s\'exprime pleinement quand on accepte une défaite avec calme et sérénité.',
    category: Category.CODE_MORAL,
    level: Level.DEBUTANT,
  },

  // ═══════════════════════════════════════════════
  // RÈGLES DU DOJO  (rd01–rd10)
  // ═══════════════════════════════════════════════
  {
    id: 'rd01',
    text: 'Que doit-on faire en entrant et en sortant du tatami ?',
    options: ['Courir', 'Saluer', 'Frapper dans ses mains', 'Crier "Oss !"'],
    correctIndex: 1,
    explanation: 'Le salut (Rei) en entrant et en sortant du tatami est une règle fondamentale. Il marque le respect du lieu de pratique.',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },
  {
    id: 'rd02',
    text: 'Peut-on porter des chaussures sur le tatami ?',
    options: [
      'Oui, des chaussures propres',
      'Oui, des chaussons spéciaux',
      'Non, jamais',
      'Oui, pendant l\'échauffement seulement',
    ],
    correctIndex: 2,
    explanation: 'Le tatami est une zone propre et sacrée. On y entre pieds nus (ou en chaussettes propres selon les clubs). Les chaussures restent en dehors.',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },
  {
    id: 'rd03',
    text: 'Comment appelle-t-on la tenue de judo ?',
    options: ['Kimono', 'Judogi', 'Hakama', 'Keikogi'],
    correctIndex: 1,
    explanation: 'La tenue officielle se nomme le judogi (ou judogi). On dit souvent "kimono" par abus de langage, mais le terme exact est judogi.',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },
  {
    id: 'rd04',
    text: 'Quelle couleur de judogi est portée lors des compétitions officielles ?',
    options: ['Uniquement blanc', 'Uniquement bleu', 'Blanc ou bleu selon le tirage au sort', 'La couleur que l\'on veut'],
    correctIndex: 2,
    explanation: 'En compétition, un judoka porte le blanc et l\'autre porte le bleu, selon le tirage. Cela permet de les distinguer facilement.',
    category: Category.REGLES_DOJO,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'rd05',
    text: 'Que doit-on faire si son judogi s\'ouvre pendant le combat ?',
    options: [
      'Continuer à combattre',
      'S\'arrêter et le refermer uniquement quand l\'arbitre dit "Matte"',
      'Le refermer immédiatement même en plein combat',
      'Demander un temps mort',
    ],
    correctIndex: 1,
    explanation: 'On attend le "Matte" (arrêt) de l\'arbitre pour remettre en ordre son judogi. Interrompre le combat de sa propre initiative n\'est pas autorisé.',
    category: Category.REGLES_DOJO,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'rd06',
    text: 'Comment appelle-t-on le professeur de judo ?',
    options: ['Sensei', 'Senpai', 'Shihan', 'Sempai'],
    correctIndex: 0,
    explanation: '"Sensei" signifie "celui qui est né avant", c\'est-à-dire celui qui a plus d\'expérience. C\'est le terme respectueux pour désigner le professeur.',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },
  {
    id: 'rd07',
    text: 'Comment appelle-t-on la zone d\'entraînement en judo ?',
    options: ['Arena', 'Ring', 'Tatami', 'Gymnase'],
    correctIndex: 2,
    explanation: 'Le tatami est le tapis de sol traditionnel en judo. Il permet des chutes sans danger. Le mot vient du japonais "tatamu" (plier).',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },
  {
    id: 'rd08',
    text: 'Que signifie "Seiza" dans le dojo ?',
    options: [
      'Se lever rapidement',
      'La position assise formelle sur les genoux',
      'Le salut debout',
      'L\'échauffement',
    ],
    correctIndex: 1,
    explanation: 'Le "Seiza" est la position agenouillée traditionnelle utilisée pour les saluts formels en début et fin de cours.',
    category: Category.REGLES_DOJO,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'rd09',
    text: 'Pourquoi les ongles doivent-ils être coupés courts au judo ?',
    options: [
      'C\'est une règle esthétique',
      'Pour éviter de blesser les partenaires lors des saisies',
      'Pour mieux saisir le judogi',
      'Les ongles ne doivent pas forcément être courts',
    ],
    correctIndex: 1,
    explanation: 'Les ongles longs peuvent blesser gravement les partenaires lors des saisies. C\'est une règle de sécurité fondamentale.',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },
  {
    id: 'rd10',
    text: 'Que faire si un judoka plus gradé entre dans le dojo pendant l\'entraînement ?',
    options: [
      'Continuer l\'entraînement sans s\'interrompre',
      'Le saluer respectueusement',
      'S\'arrêter et lui céder sa place',
      'Lui poser des questions techniques',
    ],
    correctIndex: 1,
    explanation: 'Le respect de la hiérarchie est fondamental au dojo. Saluer un gradé qui arrive est une marque de politesse et de reconnaissance.',
    category: Category.REGLES_DOJO,
    level: Level.DEBUTANT,
  },

  // ═══════════════════════════════════════════════
  // GRADES ET CEINTURES  (gc01–gc10)
  // ═══════════════════════════════════════════════
  {
    id: 'gc01',
    text: 'Quelle est la première ceinture obtenue en judo (après la blanche) ?',
    options: ['Orange', 'Jaune', 'Verte', 'Bleue'],
    correctIndex: 1,
    explanation: 'L\'ordre des ceintures est : Blanche → Jaune → Orange → Verte → Bleue → Marron → Noire (1er Dan).',
    category: Category.GRADES_CEINTURES,
    level: Level.DEBUTANT,
  },
  {
    id: 'gc02',
    text: 'Que signifie "Kyu" dans le système de grades du judo ?',
    options: [
      'Grade de maître',
      'Grade inférieur à la ceinture noire',
      'Technique de projection',
      'Grade de professeur',
    ],
    correctIndex: 1,
    explanation: 'Les "Kyu" sont les grades des ceintures de couleur (avant la noire). Le 1er Kyu est la ceinture marron, le plus proche de la noire.',
    category: Category.GRADES_CEINTURES,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'gc03',
    text: 'Que signifie "Dan" dans le système de grades du judo ?',
    options: [
      'Élève débutant',
      'Niveau au-delà de la ceinture noire',
      'Professeur certifié',
      'Technique de strangulation',
    ],
    correctIndex: 1,
    explanation: 'Les "Dan" sont les grades de la ceinture noire. Le 1er Dan est le premier niveau de ceinture noire. Il peut y en avoir jusqu\'à 10.',
    category: Category.GRADES_CEINTURES,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'gc04',
    text: 'Quelle ceinture est portée par un judoka de haut niveau (6e, 7e, 8e Dan) ?',
    options: ['Rouge et blanche', 'Rouge et noire', 'Noire avec liseré rouge', 'Rouge'],
    correctIndex: 1,
    explanation: 'De 6e à 8e Dan, les judokas portent une ceinture rouge et blanche (à damier). La ceinture rouge est réservée aux 9e et 10e Dan.',
    category: Category.GRADES_CEINTURES,
    level: Level.CONFIRME,
  },
  {
    id: 'gc05',
    text: 'Dans quel ordre se trouvent les ceintures de couleur en judo (en France) ?',
    options: [
      'Blanche, Jaune, Verte, Orange, Bleue, Marron',
      'Blanche, Jaune, Orange, Verte, Bleue, Marron',
      'Blanche, Orange, Jaune, Verte, Bleue, Marron',
      'Blanche, Jaune, Bleue, Orange, Verte, Marron',
    ],
    correctIndex: 1,
    explanation: 'En France, l\'ordre officiel est : Blanche → Jaune → Orange → Verte → Bleue → Marron → Noire.',
    category: Category.GRADES_CEINTURES,
    level: Level.DEBUTANT,
  },
  {
    id: 'gc06',
    text: 'Quel organisme délivre les grades de ceinture noire en France ?',
    options: ['Le club local', 'La FFJDA', 'Le Comité Départemental', 'Le ministère des sports'],
    correctIndex: 1,
    explanation: 'Les grades de ceinture noire sont homologués par la FFJDA. Les passages de grade inférieurs peuvent être organisés par les comités départementaux.',
    category: Category.GRADES_CEINTURES,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'gc07',
    text: 'Quel est le nombre maximum de Dan en judo ?',
    options: ['8', '9', '10', '12'],
    correctIndex: 2,
    explanation: 'Il existe 10 Dan au total. Le 10e Dan est extrêmement rare et n\'a été attribué qu\'à une poignée de judokas dans l\'histoire mondiale.',
    category: Category.GRADES_CEINTURES,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'gc08',
    text: 'Pour passer un grade de ceinture en judo, quels éléments sont généralement évalués ?',
    options: [
      'Uniquement les combats (randori)',
      'Techniques, combats et comportement général',
      'Uniquement la connaissance théorique',
      'La vitesse de course à pied',
    ],
    correctIndex: 1,
    explanation: 'Le passage de grade évalue les techniques (katas et nages), les combats (randori) et le comportement (code moral, esprit judo).',
    category: Category.GRADES_CEINTURES,
    level: Level.DEBUTANT,
  },
  {
    id: 'gc09',
    text: 'Jigoro Kano avait lui-même introduit quel système de ceintures colorées ?',
    options: [
      'Les ceintures de toutes les couleurs actuelles',
      'Uniquement la ceinture blanche et la ceinture noire',
      'Les ceintures de dan uniquement',
      'Le système kyu/dan sans couleur de ceinture',
    ],
    correctIndex: 1,
    explanation: 'Kano a d\'abord introduit la distinction blanche/noire. Les ceintures de couleur intermédiaires ont été ajoutées plus tard, notamment en Europe.',
    category: Category.GRADES_CEINTURES,
    level: Level.CONFIRME,
  },
  {
    id: 'gc10',
    text: 'À quel âge minimum peut-on passer la ceinture noire 1er Dan en France ?',
    options: ['14 ans', '15 ans', '16 ans', '18 ans'],
    correctIndex: 2,
    explanation: 'En France, l\'âge minimum pour obtenir le 1er Dan est de 16 ans, avec des conditions de pratique et de compétition.',
    category: Category.GRADES_CEINTURES,
    level: Level.INTERMEDIAIRE,
  },

  // ═══════════════════════════════════════════════
  // VOCABULAIRE JAPONAIS  (vj01–vj10)
  // ═══════════════════════════════════════════════
  {
    id: 'vj01',
    text: 'Que signifie "Ippon" ?',
    options: ['Demi-point', 'Point entier — victoire immédiate', 'Pénalité', 'Attaque'],
    correctIndex: 1,
    explanation: '"Ippon" signifie "un point" et correspond à la victoire totale et immédiate. C\'est le graal du judoka !',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.DEBUTANT,
  },
  {
    id: 'vj02',
    text: 'Que signifie "Waza-ari" ?',
    options: ['Technique interdite', 'Demi-point (technique presque parfaite)', 'Ippon annulé', 'Attaque au sol'],
    correctIndex: 1,
    explanation: '"Waza-ari" est un demi-point. Deux Waza-ari valent un Ippon. Il récompense une technique presque parfaite.',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.DEBUTANT,
  },
  {
    id: 'vj03',
    text: 'Que signifie "Matte" ?',
    options: ['Continuez !', 'Arrêtez !', 'Recommencez !', 'Bravo !'],
    correctIndex: 1,
    explanation: '"Matte" est l\'ordre de l\'arbitre pour arrêter momentanément le combat. Les judokas doivent immédiatement s\'immobiliser.',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.DEBUTANT,
  },
  {
    id: 'vj04',
    text: 'Que désigne "Uke" dans la pratique du judo ?',
    options: [
      'Celui qui exécute la technique',
      'Celui qui reçoit la technique',
      'L\'arbitre',
      'Le professeur',
    ],
    correctIndex: 1,
    explanation: '"Uke" est celui qui reçoit la technique (et chute). "Tori" est celui qui exécute la technique. Ces rôles alternent à l\'entraînement.',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'vj05',
    text: 'Que signifie "Shido" ?',
    options: ['Victoire par abandon', 'Avertissement donné à un judoka', 'Technique de clé de bras', 'Début du combat'],
    correctIndex: 1,
    explanation: '"Shido" est un avertissement infligé pour un comportement passif ou une infraction mineure. Trois Shido entraînent une disqualification (Hansoku-make).',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'vj06',
    text: 'Que signifie "Osae-komi" ?',
    options: [
      'Attaque en pied',
      'Immobilisation validée au sol',
      'Projection réussie',
      'Fin de match',
    ],
    correctIndex: 1,
    explanation: '"Osae-komi" est l\'annonce par l\'arbitre qu\'une immobilisation est validée. Une immobilisation de 20 secondes vaut Ippon.',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'vj07',
    text: 'Que signifie "Nage" dans "Nage-waza" ?',
    options: ['Défense', 'Sol', 'Projection', 'Prise'],
    correctIndex: 2,
    explanation: '"Nage" signifie projection. Les "Nage-waza" sont les techniques de projection debout, par opposition aux "Ne-waza" (techniques au sol).',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'vj08',
    text: 'Que signifie "Hajime" ?',
    options: ['Arrêtez', 'Commencez / Allez !', 'Bravo', 'Point accordé'],
    correctIndex: 1,
    explanation: '"Hajime" est le signal du début du combat donné par l\'arbitre. C\'est l\'équivalent du "go" en judo.',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.DEBUTANT,
  },
  {
    id: 'vj09',
    text: 'Que désigne le terme "Ne-waza" ?',
    options: [
      'Les projections debout',
      'Les techniques au sol',
      'Les prises interdites',
      'Le salut en position allongée',
    ],
    correctIndex: 1,
    explanation: '"Ne-waza" désigne l\'ensemble des techniques pratiquées au sol : immobilisations (osaekomi), étranglements (shime-waza) et clés articulaires (kansetsu-waza).',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'vj10',
    text: 'Que signifie "Soremade" ?',
    options: ['Recommencez', 'C\'est terminé — fin du combat', 'Continuez au sol', 'Pénalité maximale'],
    correctIndex: 1,
    explanation: '"Soremade" ("c\'est ainsi jusqu\'ici") est la déclaration de fin de combat par l\'arbitre, souvent accompagnée d\'un geste des bras.',
    category: Category.VOCABULAIRE_JAPONAIS,
    level: Level.CONFIRME,
  },

  // ═══════════════════════════════════════════════
  // ARBITRAGE & VIE ASSOCIATIVE / CD34  (av01–av10)
  // ═══════════════════════════════════════════════
  {
    id: 'av01',
    text: 'Quel est le rôle principal du Comité Départemental de Judo de l\'Hérault (CD34) ?',
    options: [
      'Former les arbitres professionnels uniquement',
      'Organiser et développer le judo dans le département de l\'Hérault',
      'Gérer uniquement les compétitions nationales',
      'Sélectionner les judokas pour les JO',
    ],
    correctIndex: 1,
    explanation: 'Le CD34 structure, développe et promeut le judo dans tout le département. Il organise les compétitions locales, les formations et soutient les clubs.',
    category: Category.ARBITRAGE_VIE,
    level: Level.DEBUTANT,
  },
  {
    id: 'av02',
    text: 'Pour pratiquer le judo en compétition, que faut-il obligatoirement avoir ?',
    options: ['Un judogi bleu', 'Une licence FFJDA en cours de validité', 'Un certificat médical uniquement', 'L\'accord de son club uniquement'],
    correctIndex: 1,
    explanation: 'La licence FFJDA est obligatoire pour toute pratique en compétition officielle. Elle inclut aussi une assurance et un suivi médical.',
    category: Category.ARBITRAGE_VIE,
    level: Level.DEBUTANT,
  },
  {
    id: 'av03',
    text: 'Combien de temps dure un combat en judo senior en compétition officielle ?',
    options: ['3 minutes', '4 minutes', '5 minutes', '6 minutes'],
    correctIndex: 1,
    explanation: 'La durée officielle est de 4 minutes pour les seniors. Elle est réduite pour les catégories jeunes (minimes, cadets...).',
    category: Category.ARBITRAGE_VIE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'av04',
    text: 'Que se passe-t-il si un judoka reçoit 3 Shido (avertissements) ?',
    options: [
      'Il perd 1 Waza-ari',
      'Il est disqualifié (Hansoku-make)',
      'Le combat est nul',
      'Il reçoit un carton rouge',
    ],
    correctIndex: 1,
    explanation: 'Trois Shido entraînent un Hansoku-make (disqualification). L\'adversaire remporte alors le combat par Ippon.',
    category: Category.ARBITRAGE_VIE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'av05',
    text: 'Comment s\'appelle la phase de judo au sol ?',
    options: ['Tachi-waza', 'Ne-waza', 'Nage-waza', 'Katame-waza'],
    correctIndex: 1,
    explanation: '"Ne-waza" désigne le travail au sol. "Katame-waza" (techniques de contrôle) en est une sous-catégorie incluant les immobilisations, étranglements et clés.',
    category: Category.ARBITRAGE_VIE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'av06',
    text: 'Quelle est la durée minimale d\'une immobilisation pour valoir Ippon ?',
    options: ['10 secondes', '15 secondes', '20 secondes', '25 secondes'],
    correctIndex: 2,
    explanation: 'Une immobilisation tenue pendant 20 secondes vaut Ippon. Entre 10 et 19 secondes, c\'est un Waza-ari.',
    category: Category.ARBITRAGE_VIE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'av07',
    text: 'Dans un tournoi par équipe en judo, combien de combattants compose généralement une équipe senior ?',
    options: ['3', '4', '5', '7'],
    correctIndex: 2,
    explanation: 'Une équipe de judo senior est composée de 5 combattants. Le score se fait au cumul des victoires individuelles.',
    category: Category.ARBITRAGE_VIE,
    level: Level.CONFIRME,
  },
  {
    id: 'av08',
    text: 'Qu\'est-ce qu\'un "kata" en judo ?',
    options: [
      'Un combat libre',
      'Une forme codifiée de techniques exécutées à deux',
      'Une technique interdite',
      'Un exercice de souplesse',
    ],
    correctIndex: 1,
    explanation: 'Un kata est une séquence de techniques codifiées pratiquées avec un partenaire. Il permet d\'apprendre et de transmettre les fondamentaux du judo.',
    category: Category.ARBITRAGE_VIE,
    level: Level.INTERMEDIAIRE,
  },
  {
    id: 'av09',
    text: 'Le CD34 organise des compétitions pour quelles catégories d\'âge ?',
    options: [
      'Uniquement les adultes',
      'Des baby-judokas aux vétérans',
      'Uniquement les jeunes jusqu\'à 18 ans',
      'Uniquement les catégories olympiques',
    ],
    correctIndex: 1,
    explanation: 'Le CD34 organise des compétitions pour toutes les catégories : éveil judo, poussins, benjamins, minimes, cadets, juniors, seniors et vétérans.',
    category: Category.ARBITRAGE_VIE,
    level: Level.DEBUTANT,
  },
  {
    id: 'av10',
    text: 'Qu\'est-ce que le "randori" ?',
    options: [
      'Un kata officiel de la FFJDA',
      'Le combat libre d\'entraînement',
      'Une compétition régionale',
      'Un stage intensif de judo',
    ],
    correctIndex: 1,
    explanation: '"Randori" signifie "saisir le chaos". C\'est le combat libre à l\'entraînement, où les deux partenaires s\'appliquent mutuellement les techniques apprises.',
    category: Category.ARBITRAGE_VIE,
    level: Level.DEBUTANT,
  },
]

// ── Selector helpers ──────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function getByCategory(cat: Category): Question[] {
  return ALL_QUESTIONS.filter(q => q.category === cat)
}

export function getByLevel(level: Level): Question[] {
  return ALL_QUESTIONS.filter(q => q.level === level)
}

export function getRandomQuestions(count = 10): Question[] {
  return shuffle(ALL_QUESTIONS).slice(0, count)
}

export function buildSession(config: QuizConfig): Question[] {
  switch (config.mode) {
    case QuizMode.QUICK:
      return getRandomQuestions(10)
    case QuizMode.BY_THEME:
      return config.category
        ? shuffle(getByCategory(config.category))
        : getRandomQuestions(10)
    case QuizMode.BY_LEVEL:
      return config.level
        ? shuffle(getByLevel(config.level))
        : getRandomQuestions(10)
  }
}
