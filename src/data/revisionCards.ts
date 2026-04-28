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
    id: 'rc-grades-club',
    title: 'Programme des grades',
    emoji: '📋',
    category: Category.GRADES_CLUB,
    content: `Traductions des techniques par ceinture :

🟡⬜ Blanche-Jaune
• Tai Otoshi → Renversement du corps par barrage
• O Uchi Gari → Grand fauchage intérieur
• Ko Uchi Gari → Petit fauchage intérieur
• Kesa Gatame → Contrôle en travers

🟡 Jaune
• O Soto Gari → Grand fauchage extérieur
• O Soto Otoshi → Grand renversement extérieur
• Seoi Otoshi → Projection par-dessus l'épaule avec barrage
• Sasae Tsuri Komi Ashi → Blocage du pied en tirant et en pêchant
• O Goshi → Grande hanche

🟠🟡 Jaune-Orange
• Seoi Nage → Projection par-dessus l'épaule (portée)
• Ko Soto Gari/Gake → Petit fauchage / accrochage extérieur
• De Ashi Barai → Balayage du pied avancé
• Okuri Ashi Barai → Balayage des deux pieds
• Tsuri Goshi → Hanche tirée
• Uki Goshi → Hanche flottée
• Kata Gatame → Contrôle par l'épaule

🟠 Orange
• Uchi Mata → Fauchage par l'intérieur de la cuisse
• Hiza Guruma → Roue autour du genou
• Harai Goshi → Hanche balayée
• Tsuri Komi Goshi → Projection de hanche en soulevant
• Tsubame Gaeshi → Le retour de l'hirondelle
• Ushiro Gesa Gatame → Contrôle arrière par le travers

🟢🟠 Orange-Verte
• Ashi Guruma → Roue autour de la jambe
• Ushiro Goshi → Projection de hanche par l'arrière
• Sode Tsuri Komi Goshi → Hanche pêchée en soulevant le coude
• Hane Goshi → Hanche sautée
• Harai Tsuri Komi Ashi → Balayage de la jambe en pêchant
• Makura Gesa Gatame → Contrôle par le travers en oreiller

🟢 Verte
• Koshi Guruma → Roue autour des hanches
• Kubi Nage → Projection par le cou
• Utsuri Goshi → Projection de hanche en contre
• Tomoe Nage → Projection en cercle
• Ura Nage → Projection en arrière
• Sumi Gaeshi → Renversement dans l'angle
• Soto Maki Komi → Barrage extérieur en s'enroulant

🔵 Bleue
• Yoko Tomoe Nage → Projection en cercle sur le côté
• Tani Otoshi → Chute dans la vallée
• Yoko Guruma → Enroulement latéral
• Yoko Gake → Accrochage latéral
• Juji Gatame → Clé en croix
• Sankaku Jime → Étranglement en triangle

🟤 Marron
• Morote Gari → Fauchage des deux jambes
• Kibisu Gaeshi → Retournement du talon
• Te Guruma → Roue de la main
• Uki Otoshi → Chute flottante
• Sumi Otoshi → Renversement dans l'angle
• Ude Garami → Clé en torsion du bras
• Ude Gatame → Clé en extension du coude
• Hadaka Jime → Étranglement à mains nues
• Okuri Eri Jime → Étranglement en glissant le revers
• Kata Ha Jime → Étranglement d'une seule aile`,
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
