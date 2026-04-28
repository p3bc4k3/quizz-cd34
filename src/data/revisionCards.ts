import { Category } from '../types/quiz'
import type { RevisionCard } from '../types/quiz'

export const REVISION_CARDS: RevisionCard[] = [
  {
    id: 'rc-histoire',
    title: 'Histoire rapide du judo',
    emoji: '📜',
    category: Category.HISTOIRE,
    content: `Le judo a été créé en 1882 par Jigorō Kanō (1860-1938) à Tokyo, à partir du jiu-jitsu traditionnel japonais — notamment des écoles Tenshin Shin'yō-ryū et Kitō-ryū.

Kanō a fondé le Kōdōkan ("temple de la voie") et a sélectionné les meilleures techniques en supprimant les plus dangereuses, pour créer un art martial sûr et éducatif.

Le mot "judo" signifie "la voie souple" :
• Ju (柔) = souplesse, adaptabilité
• Do (道) = voie, chemin de vie

La légende de la branche souple :
En 1733, Akiyama Yoshitoki observe qu'après une tempête de neige, les branches rigides cassent sous le poids de la neige, tandis que les branches souples plient et se libèrent. Cette image illustre le principe fondamental du judo : céder pour mieux vaincre.

Les deux maximes de Kanō (1920) :
• Seiryoku zenyo — "utilisation optimale de l'énergie"
• Jita kyoei — "entraide et prospérité mutuelle"

Grandes dates :
• 1882 — Fondation du judo par Jigorō Kanō
• 1951 — Création de la Fédération Internationale de Judo (FIJ)
• 1956 — Premier Championnat du Monde à Tokyo
• 1964 — Le judo devient sport olympique à Tokyo ; l'Hollandais Anton Geesink remporte la catégorie "toutes catégories", premier non-Japonais champion olympique de judo
• 1992 — Le judo féminin entre aux Jeux Olympiques à Barcelone
• Aujourd'hui — ~30 millions de pratiquants dans plus de 200 pays`,
  },
  {
    id: 'rc-histoire-france',
    title: 'Le judo en France',
    emoji: '🇫🇷',
    category: Category.HISTOIRE_FRANCE,
    content: `Le judo s'implante en France dès le début du XXe siècle, mais c'est surtout à partir des années 1930 qu'il prend son essor.

Dates clés :
• 1935 — Arrivée à Paris de Mikinosuke Kawaishi, fondateur de la "méthode française"
• 1936 — Fondation du Jūjutsu Club de France (Frédéric Joliot-Curie en est le secrétaire général)
• 1939 — Maurice Cottereau, première ceinture noire française
• 1943 — Premier Championnat de France (vainqueur : Jean de Herdt)
• 1946 — Création de la Fédération Française de Judo et Jūjutsu
• 1951 — Premier Championnat d'Europe : la France remporte tous les titres
• 1956 — Fin de la "Guerre des méthodes" par un protocole d'accord

L'apport de Kawaishi :
Kawaishi popularise en Europe le système de ceintures de couleur pour matérialiser la progression des élèves — une innovation adoptée dans le monde entier.

Champions emblématiques :
• 1975 — Jean-Luc Rougé, 1er champion du monde français
• 1980 — Thierry Rey et Angelo Parisi, champions olympiques (Moscou)
• 1992 — Cécile Nowak et Catherine Fleury, premières championnes olympiques françaises
• 1996-2000 — David Douillet, double champion olympique
• 2012-2024 — Teddy Riner, 10 fois champion du monde et 3 fois champion olympique

Le judo aujourd'hui en France :
• ~530 000 licenciés FFJDA (environ 1 % de la population)
• L'une des fédérations sportives les plus importantes de France
• La France est une nation de référence mondiale en judo`,
  },
  {
    id: 'rc-code-moral',
    title: 'Code moral du judo',
    emoji: '🤝',
    category: Category.CODE_MORAL,
    content: `Le code moral du judo comprend 8 valeurs fondamentales :

1. Politesse (Rei) — Respecter les formes, saluer, avoir de bonnes manières
2. Courage (Yuki) — Oser, persévérer, affronter ses difficultés
3. Sincérité (Makoto) — Être honnête, franc, sans tromperie
4. Honneur (Meiyo) — Agir avec intégrité, tenir ses engagements
5. Modestie (Kenjo) — Garder les pieds sur terre, accepter succès et échecs
6. Respect (Sonkei) — Reconnaître la valeur des personnes et des traditions
7. Contrôle de soi (Jiko seigyo) — Maîtriser ses émotions et réactions
8. Amitié (Yūjō) — Créer des liens durables avec ses partenaires

Ces valeurs ne s'appliquent pas seulement au tatami, mais dans toute la vie quotidienne.

Le judo est avant tout une école de vie !`,
  },
  {
    id: 'rc-regles-dojo',
    title: 'Règles du dojo',
    emoji: '🏯',
    category: Category.REGLES_DOJO,
    content: `Le dojo est un lieu de respect et d'apprentissage. Voici les règles essentielles :

Le salut (Rei) :
• Saluer en entrant ET en sortant du tatami
• Saluer son professeur (Sensei) et ses partenaires
• Le salut se fait debout ou en seiza (à genoux)

La tenue (Judogi) :
• Porter un judogi propre et en bon état
• Garder la ceinture correctement nouée
• Ongles courts, bijoux enlevés, cheveux attachés

Sur le tatami :
• Pas de chaussures sur le tatami
• Pas de nourriture ni boisson (sauf eau)
• Respecter les instructions du Sensei
• Pas de comportement violent ou irrespectueux

L'hygiène :
• Corps propre avant chaque entraînement
• Judogi lavé régulièrement
• Pieds propres sur le tatami

Le vocabulaire essentiel :
• Sensei = professeur
• Senpai = élève plus gradé
• Tatami = zone de pratique
• Dojo = salle d'entraînement`,
  },
  {
    id: 'rc-ceintures',
    title: 'Ceintures et grades',
    emoji: '🥋',
    category: Category.GRADES_CEINTURES,
    content: `Le système de grades du judo comprend deux niveaux :

Les Kyu (ceintures de couleur) :
• 6e Kyu — Ceinture Blanche (débutant)
• 5e Kyu — Ceinture Jaune
• 4e Kyu — Ceinture Orange
• 3e Kyu — Ceinture Verte
• 2e Kyu — Ceinture Bleue
• 1er Kyu — Ceinture Marron

Pour les jeunes, des ceintures bicolores (mi-blanc/mi-couleur suivante) marquent une étape intermédiaire entre chaque grade. Ce système progressif a été introduit par Mikinosuke Kawaishi en France dès 1935 pour motiver les élèves.

Les Dan (ceintures noires) :
• 1er au 5e Dan — Ceinture Noire
• 6e au 8e Dan — Ceinture Rouge et Blanche (damier)
• 9e et 10e Dan — Ceinture Rouge
(Le 10e Dan est exceptionnel, accordé à très peu de judokas dans l'histoire)

Le passage de grade évalue :
→ La technique (chutes, projections, travail au sol)
→ Le combat (randori)
→ Le comportement général (code moral)

En France, l'âge minimum pour le 1er Dan est 16 ans.
Les passages de grades Kyu sont organisés par les clubs et comités départementaux.`,
  },
  {
    id: 'rc-japonais',
    title: 'Mots japonais essentiels',
    emoji: '🇯🇵',
    category: Category.VOCABULAIRE_JAPONAIS,
    content: `Les mots de l'arbitre :
• Hajime — Commencez !
• Matte — Arrêtez !
• Soremade — C'est terminé (fin de combat)
• Ippon — Point entier, victoire immédiate
• Waza-ari — Demi-point (2 Waza-ari = Ippon)
• Shido — Avertissement
• Hansoku-make — Disqualification

Les rôles :
• Tori — Celui qui exécute la technique
• Uke — Celui qui reçoit la technique

Les catégories de techniques :
• Nage-waza — Techniques de projection (debout)
• Ne-waza — Techniques au sol
• Osae-komi-waza — Immobilisations
• Shime-waza — Étranglements
• Kansetsu-waza — Clés articulaires

Le lieu et les personnes :
• Dojo — Salle d'entraînement
• Tatami — Tapis de combat
• Judogi — Tenue de judo
• Sensei — Professeur
• Senpai — Élève plus expérimenté

La pratique :
• Randori — Combat libre d'entraînement
• Shiai — Combat en compétition
• Kata — Formes codifiées de techniques
• Uchi-komi — Répétition de la technique sans chute complète
• Nage-komi — Répétition avec chute complète
• Rei — Salut / Politesse

Les principes fondateurs :
• Seiryoku zenyo — Utilisation optimale de l'énergie
• Jita kyoei — Entraide et prospérité mutuelle`,
  },
  {
    id: 'rc-arbitrage',
    title: 'Arbitrage de base',
    emoji: '🏅',
    category: Category.ARBITRAGE_VIE,
    content: `L'arbitre et son rôle :
• Un arbitre central dirige le combat sur le tatami
• Il est assisté de juges de coin (officiels de table)
• Il donne les scores, annonce les pénalités et gère le temps

─── SCORES ───

Ippon — Victoire immédiate
• Projection sur le dos avec amplitude, vitesse et contrôle total
• Immobilisation maintenue ≥ 20 secondes (Osaekomi)
• Abandon de l'adversaire (Maitta — frapper 2 fois le tatami ou se rendre)
• Hansoku-make adverse

Waza-ari — Demi-point
• Projection satisfaisant partiellement les critères de l'Ippon
• Immobilisation tenue 10 à 19 secondes
• 2 Waza-ari = Ippon (victoire immédiate)

À égalité en fin de temps → Golden Score
• Prolongation soudaine : le premier judoka à marquer gagne
• En cas de Shido adverse, le judoka opposé gagne aussi

─── PÉNALITÉS ───

Shido (avertissement mineur)
• Passivité, absence d'attaque
• Sortie délibérée de l'aire de combat
• Prises irrégulières (saisir par en dessous la ceinture, etc.)
• Attaques avec la tête en avant
• Simuler une blessure
• 3 Shido cumulés = Hansoku-make (l'adversaire gagne)

Hansoku-make (disqualification directe)
• Infraction grave mettant l'adversaire en danger
• Kani-basami (ciseaux des jambes)
• Kawazu-gake (projection en arrière avec jambe enroulée)
• Toute attaque susceptible de blesser la colonne vertébrale
• Ude-garami appliqué dans le mauvais sens (coude)
• Porter l'adversaire au-delà de la verticale et le laisser tomber sur la tête

─── ACTES INTERDITS ───

Debout :
• Saisir directement la jambe sans action préalable
• Attaques sur les articulations autres que le coude
• Étranglements et clés articulaires debout (sans transition au sol)

Au sol :
• Clé sur articulation autre que le coude
• Prendre l'adversaire en pont (Kado-make)
• Résister à une immobilisation en sortant de l'aire

─── SITUATIONS COURANTES ───

• Osaekomi — L'arbitre valide une immobilisation, le chrono démarre
• Toketa — L'immobilisation est annulée, le chrono s'arrête
• Matte — Arrêt du combat (judogis à remettre, hors limites, etc.)
• Soremade — Fin du temps, le score est figé

─── GESTES DE L'ARBITRE ───

• Bras tendu vers le haut → Ippon
• Bras demi-levé (horizontal) → Waza-ari
• Index pointé vers le judoka → Shido
• Bras croisés → Hansoku-make
• Les deux bras écartés → Matte
• Bras tendu vers le bas → Osaekomi (chrono immobilisation)
• Deux mains qui s'écartent → Toketa (immobilisation annulée)
• Bras horizontal puis vers le vainqueur → désignation

─── DÉROULEMENT D'UN COMBAT ───

1. Judokas en ligne, salut face à face (Rei)
2. Arbitre : "Hajime" → le combat commence
3. "Matte" si nécessaire (remise en tenue, hors limites…)
4. "Soremade" → fin du combat, désignation du vainqueur
5. Judokas se saluent mutuellement`,
  },
]
