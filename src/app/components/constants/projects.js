import {NEWS_TYPES} from './news';

export var PROJECTS = [
    {
        title: 'Islam, objet médiatique',
        slug: 'islam-objet-mediatique',
        url: 'http://islam-objet-mediatique.fr',
        full_description: `Orientalisme, islamophobie ou encore racisme à peine voilé, les critiques à l’encontre du traitement médiatique de l’islam sont quotidiennes et émanent d’agents sociaux aux spectres idéologiques divergents.

Des présupposés culturalistes mis en lumière par Edward Saïd (Islam in the medias, 1981) à l’analyse de la “fabrication” d’un “problème musulman” décortiquée par Thomas Deltombe (L'islam imaginaire, 2005), Abdellali Hajjat et Marwan Mohammed (Comment les élites françaises fabriquent le “problème musulman”, 2013), la critique sociologique tend à mettre en évidence une mauvaise compréhension des phénomènes religieux, politiques ou socio-culturels directement ou indirectement liés à l’islam. L’usage d’une grille de lecture essentialisante ainsi que la culturalisation de problèmes principalement sociaux, économiques ou politiques font partie des procédés déconstruits par cette approche critique.

En réponse à cette appréciation sociologique, une autre critique - rarement académique mais tout aussi visible - reproche à la presse un tropisme islamophile. Dénonçant une "bien pensance" particulièrement avenante envers l’islam voire la dissimulation de la vérité par des acteurs complices de la “cause islamiste”, ses promoteurs en appellent à la levée de la censure et de l’autocensure à propos de faits impliquant l’islam ou des individus de confession musulmane.`,
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
                source: 'EGC 2017',
                date: '2017-01-24',
                url: 'https://www.mediapart.fr/journal/economie/181116/lislam-objet-mediatique'
            },
            {
                type: NEWS_TYPES.quote,
                title: 'Présentation à l\'atelier "Journalism Computationnel"',
                source: 'Raul Magni-Berton',
                date: '2017-02-24',
                url: 'https://www.mediapart.fr/journal/economie/181116/lislam-objet-mediatique'
            }
        ]
    },
    {
        title: 'Dérangeons la Chambre',
        slug: 'derangeons-la-chambre',
        url: 'http://www.derangeonslachambre.fr',
        full_description: ` Participation en baisse, défiance grandissante vis-à-vis de la “classe politique”, critiques politiques sur la représentativité de l’Assemblée, la démocratie traverse une crise en France. A défaut d’une remise en question plus large de la démocratie représentative, il convient de s’interroger au moins, sur les mécanismes de délégation du pouvoir aux députés.
Les résultats des élections parlementaires ont des conséquences potentiellement importantes sur nos vies. Ils dépendent de trois aspects&nbsp;: les candidats, les électeurs et les règles électorales.
L’importance des règles électorales pour déterminer les résultat d’une élection est souvent sous estimée. C’est pourtant un paramètre déterminant.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"Changeons les règles et voyons ce qui se passe"**

Les règles électorales sont nombreuses. Elles vont de l’inscription sur les listes électorales (automatique ? possible le jour de l’élection ?) aux moyens de voter (sur internet, par courrier ?) et sont, dans le cas des législatives, énoncées par le Code Électoral et non par la Constitution, rendant par là possible un changement de règles du jeu par la seule adoption d’une loi organique (ce qui fut d’ailleurs fait en 1986 au bénéfice de la proportionnelle, puis abandonné).

Un bon moyen de visualiser l’influence des règles électorales est de se concentrer sur la façon de compter les voix, et de simuler ce que serait notre Assemblée Nationale si nous étions Allemands, Britanniques, Italiens, Espagnols, Hollandais… bref, si avec exactement les mêmes votants et les mêmes partis, nous avions adopté des règles électorales différentes.
`,
        description: "Application web de science politique - A quoi ressemblerait l’Assemblée Nationale si l’on changeait le mode de scrutin aux élections législatives ? Avec R. Magni-Berton (Sciences Po Grenoble).",
        picture: 'assets/images/projects/dlc/grid.jpg',
        screenshots: [
            'assets/images/projects/dlc/screenshot1.png',
            'assets/images/projects/dlc/screenshot2.png',
            'assets/images/projects/dlc/screenshot3.png',
            'assets/images/projects/dlc/screenshot4.png',
            'assets/images/projects/dlc/screenshot5.png'
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
                title: 'Conférence de Raoul Magni-Berton - « Dérangeons la chambre » la nouvelle application qui permet de visualiser l’influence des règles électorales.',
                date: '2016-12-20'
            }
        ]
    }
];
