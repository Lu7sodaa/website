import {NEWS_TYPES} from './news';

export var PROJECTS = [
    {
        title: 'Islam, objet médiatique',
        slug: 'islam-objet-mediatique',
        url: 'http://islam-objet-mediatique.fr',
        description: "Etude sur le traitement médiatique de l'islam dans la presse française (1997-2015), basée sur l'analyse des archives numériques de Libération, Le Monde et le Figaro. Avec Moussa Bourekba (CIDOB)",
        grid_picture: 'assets/images/projects/idlm/grid.jpg',
        screenshots: [
            'assets/images/projects/idlm/grid.jpg'
        ],
        newsfeed: [
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
                title: 'Présentation à l\atelier "Journalism Computationnel"',
                source: 'EGC 2017',
                date: '2017-01-24',
                url: 'https://www.mediapart.fr/journal/economie/181116/lislam-objet-mediatique'
            }
        ]
    },
    {
        title: 'Dérangeons la Chambre',
        slug: 'derangeons-la-chambre',
        url: 'http://www.derangeonslachambre.fr',
        description: "Application web de science politique - A quoi ressemblerait l’Assemblée Nationale si l’on changeait le mode de scrutin aux élections législatives ? Avec R. Magni-Berton (Sciences Po Grenoble).",
        grid_picture: 'assets/images/projects/dlc/grid.jpg',
        screenshots: [
            'assets/images/projects/dlc/grid.jpg'
        ],
        newsfeed: [
            // {
            //     type: NEWS_TYPES.article,
            //     title: 'test test pof pof',
            //     date: '2016-11-22'
            // },
            // {
            //     type: NEWS_TYPES.article,
            //     title: 'test test pof pof',
            //     date: '2016-11-22'
            // }
        ]
    }
];
