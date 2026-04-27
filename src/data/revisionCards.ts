import { Category } from '../types/quiz'
import type { RevisionCard } from '../types/quiz'

export const REVISION_CARDS: RevisionCard[] = [
  {
    id: 'rc-histoire',
    title: 'Histoire rapide du judo',
    emoji: '📜',
    category: Category.HISTOIRE,
    content: `Le judo a été créé en 1882 par Jigoro Kano (1860-1938) à Tokyo, à partir du jiu-jitsu traditionnel japonais.

Kano a fondé le Kodokan (temple de la voie) et a sélectionné les meilleures techniques en supprimant les plus dangereuses, pour créer un art martial sûr et éducatif.

Le mot "judo" signifie "la voie souple" (ju = souple, do = voie/chemin).

Grandes dates :
• 1882 — Fondation du judo par Jigoro Kano
• 1951 — Création de la Fédération Internationale de Judo (FIJ)
• 1964 — Le judo devient sport olympique à Tokyo (hommes)
• 1992 — Le judo féminin entre aux Jeux Olympiques à Barcelone
• Aujourd'hui — Le judo est pratiqué dans plus de 200 pays

En France, la FFJDA (Fédération Française de Judo, Jiu-jitsu, Kendo et Disciplines Associées) gère plus de 600 000 licenciés.

Le Comité Départemental de l'Hérault (CD34) structure la pratique dans notre département.`,
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
• Kata — Formes codifiées de techniques
• Uchi-komi — Répétition de techniques sans chute
• Rei — Salut / Politesse`,
  },
  {
    id: 'rc-arbitrage',
    title: 'Arbitrage de base',
    emoji: '🏅',
    category: Category.ARBITRAGE_VIE,
    content: `Structure d'un combat :
• Durée : 4 min (seniors), 3 min (cadets), 2 min (benjamins), 1 min 30 (minimes)
• Un arbitre central + 2 juges de coin
• Victoire par Ippon immédiate, sinon au score à la fin du temps

Comment gagner :
• Ippon — Projection parfaite (sur le dos, avec amplitude, vitesse, contrôle) OU immobilisation ≥ 20 s OU abandon (Maitta)
• Waza-ari — Projection presque parfaite OU immobilisation 10-19 s
• 2 Waza-ari = Ippon
• À égalité → prolongation en Golden Score (premier point gagne)

Pénalités :
• Shido — Avertissement (passivité, sortie volontaire, infractions mineures)
• 3 Shido = Hansoku-make (disqualification)
• Hansoku-make direct — Infraction grave (ex : technique dangereuse)

Gestes principaux de l'arbitre :
• Bras levé, pouce en haut → Ippon
• Bras demi-levé → Waza-ari
• Index pointé vers le judoka → Shido
• Bras croisés → Hansoku-make
• Les deux bras écartés → Matte

Déroulement type d'un combat :
1. Les judokas saluent (Rei) face à face
2. L'arbitre dit "Hajime" → le combat commence
3. L'arbitre dit "Matte" si nécessaire
4. L'arbitre dit "Soremade" à la fin → désigne le vainqueur
5. Les judokas se saluent mutuellement`,
  },
]
