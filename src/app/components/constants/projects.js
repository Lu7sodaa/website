import {NEWS_TYPES} from './news';

export var PROJECTS = [
    {
        title: 'Un exploration (des données) de Persée',
        slug: 'prototype-exploration-persee-fr',
        url: 'http://skoli-persee-vis.surge.sh',
        description: 'Un exemple de réutilisation du TripleStore de Persée.',
        full_description: `Le Portail Persée, regroupant des milliers de publications scientifiques accessibles en ligne  a récemment ouvert son TripleStore ([data.persee.fr](http://data.persee.fr)). Une entrée remarquée dans le monde des données liées. Afin d’esquisser la puissance et les possibilités ouvertes par ce nouvel environnement, ce prototype présente, de manière graphique et augmentée par une biographie issue de [dbpédia.org](http://dbpedia.org), l’oeuvre d’auteurs présents sur le portail.

Ce prototype n’a pas vocation à être généralisé à l’ensemble de la base de donnée, il est plutôt une preuve de l’efficacité, de la pertinence et de la puissance de cet environnement RDF et vise à attirer l’intérêt des chercheurs et autres utilisateurs du portail pour le TripleStore.`,
        picture: 'assets/images/projects/prototype-persee/bourdieu-annee.png',
        screenshots: [
            'assets/images/projects/prototype-persee/bourdieu-annee.png',
            'assets/images/projects/prototype-persee/bourdieu-editeur.png'
        ],
        feed: []
    },
    {
        title: 'Islam, objet médiatique',
        slug: 'islam-objet-mediatique',
        url: 'http://islam-objet-mediatique.fr',
        full_description: `Dans un contexte marqué par une forte tension autour de questions “identitaires” en France et une redéfinition de la presse, ce projet est né d’un constat : l’islam est incontestablement devenu un sujet médiatique de premier ordre, et la presse l’objet de nombreuses critiques sur sa façon de le traiter et d’en parler.

**Islam, objet médiatique** est une analyse statistique lexicale centrée sur les archives numériques de trois quotidiens français de référence : [Le Monde](http://lemonde.fr), [Le Figaro](http://lefigaro.fr) et [Libération](http://liberation.fr). Au final, l’étude explore des milliers d’articles publiés sur près de vingt ans, recense les occurrences des termes “islam”, “musulman”, ainsi que les mots, les adjectifs ou les événements qui leur sont associés. Elle permet notamment d’observer à quel point le 11 septembre 2001 constitue l’acte de naissance d’un sujet médiatique désormais récurrent, mais longtemps resté marginal. Elle permet aussi, dans une logique plus qualitative, d’analyser le vocabulaire employé par les quotidiens sur le sujet, ainsi que son évolution dans le temps.

Grâce à une double approche quantitative et qualitative, ainsi qu’une une interface web de restitution mêlant datavisualisations et décryptages, l’étude propose un regard innovant et singulier sur la question du traitement médiatique de l’islam en France, objet de nombreuses controverses, débats et polémiques.

**Moussa Bourekba**<br>
Moussa Bourekba est chercheur au [Centre de Barcelone pour les Affaires Internationales](http://www.cidob.org) et professeur associé en relations internationales à la [Faculté de Blanquerna (Université Ramon Llull, Barcelone)](http://www.url.edu/). Il est chef du projet [SAHWA](http://www.sahwa.eu) qui vise à analyser l’évolution, les conditions et les perspectives des jeunesses arabes depuis 2011. Ses récents travaux de recherche se concentrent sur la question de l’islam en France ainsi que les phénomènes liés à l’extrémisme violent au Moyen-Orient et en Europe.
`,
        description: "Etude sur le traitement médiatique de l'islam dans la presse française (1997-2015), basée sur l'analyse des archives numériques de Libération, Le Monde et le Figaro. Avec Moussa Bourekba (CIDOB)",
        picture: 'assets/images/projects/idlm/grid.jpg',
        screenshots: [
            'assets/images/projects/idlm/screenshot1.png',
            'assets/images/projects/idlm/screenshot2.png',
            'assets/images/projects/idlm/screenshot3.png'
        ],
        feed: [
            {
                type: NEWS_TYPES.article,
                source: 'Contre-Attaque(s)',
                title: 'L’islam dans les journaux : étude d’un (mal)traitement médiatique, de 1997 à 2015',
                date: '2017-03-28',
                url: 'http://contre-attaques.org/magazine/article/islam-objet'
            },
            {
                type: NEWS_TYPES.article,
                source: 'CCIF (islamophobie.net)',
                title: '« L’islam comme objet médiatique » : les questions que pose l’étude de l’agence Skoli',
                date: '2016-12-06',
                url: 'http://www.islamophobie.net/articles/2016/12/06/%C2%AB-l%E2%80%99islam-comme-objet-mediatique-%C2%BB-les-questions-que-pose-l%E2%80%99etude-de-l%E2%80%99agence-sk'
            },
            {
                type: NEWS_TYPES.article,
                title: 'L\'islam, objet médiatique',
                source: 'Mediapart',
                date: '2016-11-18',
                url: 'https://www.mediapart.fr/journal/economie/181116/lislam-objet-mediatique'
            },
            {
                type: NEWS_TYPES.event,
                title: 'Présentation à l\'atelier "Journalism Computationnel"',
                source: 'CompJournalism 2017',
                source_url: 'http://compjournalism2017.irisa.fr/',
                date: '2017-01-24',
                url: null
            },
            {
                type: NEWS_TYPES.event,
                source: 'EGC 2017',
                title: 'Présentation à l\'atelier "Visualisation d\'informations, interaction et fouille de données"',
                source_url: 'http://gt-vif.polytech.univ-nantes.fr/egc-vif2017/',
                date: '2017-01-24',
                url:null
            },
            {
                type: NEWS_TYPES.article,
                source: 'datadrivenjournalism.net',
                title: 'Islam, media subject: How to quantify the perception of Islam in the media',
                source_url: null,
                date: '2017-02-05',
                url:'http://datadrivenjournalism.net/featured_projects/islam_media_subject_how_to_quantify_the_perception_of_islam_in_the_media'
            },
            {
                type: NEWS_TYPES.article,
                source: 'Medium',
                title: 'How to detect duplicates in a Django database',
                source_url: null,
                date: '2017-02-07',
                url:'https://medium.com/@AgenceSkoli/how-to-detect-duplicates-on-a-django-database-db3b009e9d60'
            },
            {
                type: NEWS_TYPES.article,
                source: 'Medium',
                title: 'islam, contre-champ médiatique',
                source_url: null,
                date: '2017-02-08',
                url:'https://medium.com/@AgenceSkoli/islam-contre-champ-m%C3%A9diatique-d363cf8351a6#.en0ww5u1m'
            }
        ]
    },
    {
        title: 'Dérangeons la Chambre',
        slug: 'derangeons-la-chambre',
        url: 'http://www.derangeonslachambre.fr',
        full_description: `A quoi ressemblerait l'Assemblée Nationale si l'on changeait les règles du jeu aux élections législatives ? Et si on appliquait les modes de scrutin en vigueur en Allemagne, au Royaume-Uni, en Italie, en Espagne ? La proportionnelle intégrale ? Si on considérait l'abstention comme un parti politique ?

**Dérangeons la Chambre** est une application web de science politique (élaborée à partir des résultats des élections législatives de 2012) et permettant de simuler la représentation nationale et les rapports de force qu’il existerait à l’[Assemblée Nationale](http://www.assemblee-nationale.fr/) si l’on changeait les règles de désignation des députés.

Mêlant datavisualisations et décryptages, cette interface permet de visualiser de façon dynamique les évolutions de la composition de l'hémicycle selon le mode de scrutin appliqué. Elle a l’ambition de questionner le fonctionnement de la démocratie représentative dans nos institutions et d'être accessible au plus grand nombre.

**Raul Magni-Berton**<br>
Raul Magni Berton est professeur de science politique à [Sciences Po Grenoble](http://www.sciencespo-grenoble.fr/) et chercheur à [PACTE](http://www.pacte-grenoble.fr/) (Politiques, Actions, Territoires) et au [LIEPP](http://www.sciencespo.fr/liepp/fr) (Laboratoire Interdisciplinaire d'Evaluation des Politiques Publiques). Il dirige le pôle Sciences Sociales de la Communauté [Université Grenoble Alpes](http://www.univ-grenoble-alpes.fr/), en charge d’impulser la politique scientifique en sciences sociales et est responsable de la formation à la recherche à Sciences Po Grenoble. Ses recherches sont majoritairement sur les démocraties, plus particulièrement sur l’influence des élections sur la vie politique. Il est l’auteur ou le co-auteur de nombreux articles dans des revues scientifiques et de quelques livres. Parmi les plus récents on peut citer [Démocraties Libérales](http://www.economica.fr/livre-democraties-liberales-magni-berton-raul,fr,4,9782717864700.cfm) (Paris, Economica, 2012), [2012: La campagne présidentielle](http://www.editions-harmattan.fr/index.asp?navig=catalogue&obj=livre&no=42648) (Paris. Ed. Pepper, 2014) et Que pensent les penseurs ? (Grenoble, PUG, 2015).
`,
        description: "Application web de science politique - A quoi ressemblerait l’Assemblée Nationale si l’on changeait le mode de scrutin aux élections législatives ? Avec R. Magni-Berton (Sciences Po Grenoble).",
        picture: 'assets/images/projects/dlc/grid.jpg',
        screenshots: [
            'assets/images/projects/dlc/screenshot1.png',
            'assets/images/projects/dlc/screenshot2.png',
            'assets/images/projects/dlc/screenshot5.png',
            'assets/images/projects/dlc/screenshot4.png',
            'assets/images/projects/dlc/screenshot3.png'
        ],
        feed: [
            {
                type: NEWS_TYPES.article,
                source: 'Pacte (Grenoble)',
                title: 'Assemblée Nationale : si on changeait les règles du jeu ?',
                date: '2017-01-09',
                url: 'http://www.pacte-grenoble.fr/blog/assemblee-nationale-si-on-changeait-les-regles-du-jeu/'
            },
            {
                type: NEWS_TYPES.event,
                source: 'Sciences Po Grenoble',
                title: 'Conférence de Raul Magni-Berton - « Dérangeons la chambre » la nouvelle application qui permet de visualiser l’influence des règles électorales.',
                date: '2016-12-20'
            }
        ]
    },
    {
        title: 'Exode(s) Charnel(s)',
        slug: 'exodes-charnels',
        url: 'http://www.exodes-charnels.universite-lyon.fr',
        full_description: "Une fiction interactive basée sur des travaux de recherche et explorant les méandres des migrations prostitutionnelles. A travers trois parcours fictifs, **Exode(s)-Charnel(s)** effectue une plongée dans les travaux de sciences sociales autour des questions migratoires et prostitutionnelles. Les évolutions structurelles qui ont modifiés l'univers du commerce du sexe en France s'expliquent largement par de nouvelles stratégies migratoires (notamment féminines). Cette fiction remet en question la vision largement partagée d'une prostitution organisée par des réseaux criminels internationaux et questionne la notion de *contrainte*. Réalisée dans le cadre des rencontres [Et si on en parlait](http://www.etsionenparlait.hypotheses.org) organisées par l'[Université de Lyon](http://http://www.universite-lyon.fr/), cette application est un support au débat organisé le 02/11/2017 entre la doctorante [Laure Sizaire](http://univ-lyon2.academia.edu/LaureSizaire) le sociologue [Lilian Mathieu](https://lectures.revues.org/11506), ainsi que le sociologue [Nicola Mai](http://www.lames.cnrs.fr/spip.php?article126), par ailleurs réalisateur du film [Travel](http://www.film-documentaire.fr/4DACTION/w_fiche_film/48752_1) présenté à l'occasion.",
        description: "Fiction interactive - Que dit la recherche en sciences-sociales des questions prostitutionnelles au prisme des migrations",
        picture: 'assets/images/projects/exodescharnels/grid.jpg',
        screenshots: [
            'assets/images/projects/exodescharnels/screenshot1.png',
            'assets/images/projects/exodescharnels/screenshot2.png',
            'assets/images/projects/exodescharnels/screenshot3.png',
            'assets/images/projects/exodescharnels/screenshot4.png'
        ],
        feed: [
            {
                type: NEWS_TYPES.article,
                source: 'PopSciences (Université de Lyon)',
                title: 'Exode(s) Charnel(s). Trois parcours de la migration à la prostitution',
                date: '2017-11-03',
                url: 'https://popsciences.universite-lyon.fr/ressources/exodes-charnels-trois-parcours-de-migration-a-prostitution/'
            }
        ]
    }
];
