export var CHAPTERS = [
    {
        title: 'Data',
        detailed_title: 'Utiliser les données numériques pour la recherche',
        background_image: '../assets/images/photos/yale_library.jpg',
        color_class: 'data-color',
        home_description: `Les données numériques sont devenues un matériau de recherche incontournable. Nous aidons les organisations de recherche à se les approprier et à les utiliser.`,
        description: `L’ère numérique transforme aussi la recherche. Les données issues du web, de capteurs, d’archives numérisées, etc. constituent un immense réservoir de connaissances capable d’améliorer la connaissance et la compréhension du monde. <br><br> 

        Nous accompagnons les chercheurs dans cette transformation en mettant à disposition notre savoir-faire en matière d’intelligence des données.
        Nous réalisons des missions de services et/ou développons des outils sur-mesure pour collecter, analyser et visualiser des données numériques.
        Nous travaillons en étroite collaboration avec vous pour maîtriser votre objet de recherche, nous assurer de la validité scientifique des données, et respecter votre méthodologie.
        `,
        pictogram: `<svg class="pictogram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200" height="200" version="1.1" x="0" y="0" viewBox="10 12 80 80" enable-background="new 0 0 100 100"
            xml:space="preserve"><g><path d="M49.6,48.3c7.6,0,13.8-6.2,13.8-13.8c0-7.6-6.2-13.8-13.8-13.8s-13.8,6.2-13.8,13.8C35.8,42.1,42,48.3,49.6,48.3z    M52.7,45.9l8.2-8.2C59.9,41.7,56.7,44.8,52.7,45.9z M61.4,34.5c0,0.2,0,0.4,0,0.6L50.2,46.3c-0.2,0-0.4,0-0.6,0   c-0.7,0-1.3-0.1-2-0.2l13.6-13.6C61.4,33.2,61.4,33.8,61.4,34.5z M60.1,29c0.3,0.6,0.6,1.2,0.8,1.8L45.9,45.7   c-0.6-0.2-1.2-0.5-1.8-0.8L60.1,29z M59.2,27.7L42.8,44.2c-0.5-0.3-0.9-0.7-1.3-1.1l16.7-16.7C58.6,26.8,58.9,27.3,59.2,27.7z    M45.5,23.5l-6.9,6.9C39.8,27.2,42.3,24.7,45.5,23.5z M37.8,34.5c0-0.5,0-0.9,0.1-1.4l10.4-10.4c0.4-0.1,0.9-0.1,1.4-0.1   c0.3,0,0.7,0,1,0.1L37.9,35.5C37.8,35.2,37.8,34.9,37.8,34.5z M38.2,37.4l14.3-14.3c0.6,0.1,1.2,0.3,1.7,0.6L38.7,39.1   C38.5,38.5,38.3,38,38.2,37.4z M55.6,24.4c0.5,0.3,1,0.7,1.5,1L40.5,42c-0.4-0.5-0.7-1-1-1.5L55.6,24.4z"/><path d="M31.5,68.2c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C36.4,70.4,34.2,68.2,31.5,68.2z"/><path d="M70.3,38.2c2.7,0,4.9-2.2,4.9-4.9s-2.2-4.9-4.9-4.9c-2.7,0-4.9,2.2-4.9,4.9S67.6,38.2,70.3,38.2z M70.3,30.5   c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9S68.7,30.5,70.3,30.5z"/><path d="M33.5,38.1c0-3.2-2.6-5.8-5.8-5.8s-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8S33.5,41.3,33.5,38.1z"/><path d="M46.9,57.1c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1S56.4,51,53,51S46.9,53.7,46.9,57.1z M57.1,57.1c0,2.3-1.8,4.1-4.1,4.1   s-4.1-1.8-4.1-4.1c0-2.2,1.8-4.1,4.1-4.1S57.1,54.8,57.1,57.1z"/><path d="M67.4,58c-4.8,0-8.7,3.9-8.7,8.7s3.9,8.7,8.7,8.7s8.7-3.9,8.7-8.7S72.3,58,67.4,58z"/><path d="M34,66.4c5.7,0,10.3-4.6,10.3-10.3S39.7,45.8,34,45.8c-5.7,0-10.3,4.6-10.3,10.3S28.3,66.4,34,66.4z M34,47.8   c4.6,0,8.3,3.7,8.3,8.3c0,4.6-3.7,8.3-8.3,8.3s-8.3-3.7-8.3-8.3C25.7,51.5,29.4,47.8,34,47.8z"/><path d="M48.2,64.9c-5.3,0-9.6,4.3-9.6,9.6s4.3,9.6,9.6,9.6s9.6-4.3,9.6-9.6S53.5,64.9,48.2,64.9z M47,81.9   c-0.8-0.1-1.5-0.4-2.2-0.7L55,71.1c0.3,0.7,0.6,1.4,0.7,2.2L47,81.9z M49.5,67c0.7,0.1,1.4,0.4,2,0.7L41.4,77.8   c-0.3-0.6-0.5-1.3-0.7-2L49.5,67z M47.4,66.9l-6.8,6.8C41,70.2,43.9,67.3,47.4,66.9z M42.2,79.1l10.6-10.6c0.5,0.4,0.9,0.8,1.3,1.3   L43.5,80.4C43,80.1,42.6,79.6,42.2,79.1z M49.1,82l6.6-6.6C55.3,78.8,52.5,81.6,49.1,82z"/><path d="M69.8,56.1c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S65.4,56.1,69.8,56.1z M72.7,53.4l2.5-2.5C74.6,52,73.7,52.8,72.7,53.4z    M75.5,46.1c0.2,0.6,0.3,1.3,0.3,2c0,0,0,0,0,0l-6,6c0,0,0,0,0,0c-0.7,0-1.4-0.1-2-0.3L75.5,46.1z M74.8,44.7l-8.4,8.4   c-0.6-0.4-1.1-0.9-1.5-1.5l8.4-8.4C73.9,43.6,74.4,44.1,74.8,44.7z M67.2,42.7l-2.8,2.8C65,44.3,66,43.3,67.2,42.7z M69.9,42.1   c0.7,0,1.3,0.1,2,0.4l-7.7,7.7c-0.2-0.6-0.4-1.3-0.4-2L69.9,42.1z"/></g>
        </svg>`,
        services: [
            {
                name: 'Collecte de données',
                sub_services: [
                    'Création de bases et jeux de données',
                    'Création de corpus de sources numériques',
                    'Création de (scrapers)[Programme d\'extraction du contenu d\'un site internet, dans le but de permettre son utilisation dans un autre contexte] et (crawlers)[Programme d\'exploration d\'un site internet, dans le but d\'indexer les pages qu\'il contient]',
                    'Création d’outils de (crowdsourcing)[Méthode de récolte ou de production de données, via une plateforme web, basée sur la participation d\'un grand nombre de personne]'
                ]
            },
            {
                name: 'Traitement de donnés',
                sub_services: [
                    'Production de données enrichies',
                    'Nettoyage de données'
                ]
            },
            {
                name: 'Co-analyse de données',
                sub_services: [
                    'Réalisation de visualisations de données exploratoires',
                    'Identification des outils adaptés à votre méthodologie de recherche',
                    'Conseil, formation et accompagnement sur-mesure'
                ]
            }
        ]
    },{
        title: 'Design',
        detailed_title: 'Valoriser et diffuser les travaux de recherche',
        background_image: '../assets/images/photos/alexandrie.jpg',
        color_class: 'design-color',
        home_description: `Pour redonner au savoir l’écho qu’il mérite, nous inventons avec vous des formats digitaux de restitution scientifique, innovants et capables de toucher un large public.`,
        description: `Dans un contexte de profusion d’informations, la parole des chercheurs et les acquis de la recherche ont de plus en plus de mal à être mis en valeur par les formats traditionnels de publication scientifique.<br><br>

        Nous aidons les organisations de recherche à mieux communiquer et diffuser leurs travaux, afin de réhabiliter le savoir scientifique et le rendre accessible au plus grand nombre.
        Nous concevons avec vous du contenu et des supports de médiation scientifique à haute valeur ajoutée, innovants, adaptés au web et aux nouvelles manières de recevoir l’information.
        Nous vous proposons un accompagnement de bout en bout, de la conception jusqu’au suivi de diffusion (mesures régulières d’audience des contenus produits ensemble). `,
        pictogram: `<svg class="pictogram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
            width="200" height="200" x="0px" y="0px" viewBox="0 0 100 100"
            enable-background="new 0 0 100 100" xml:space="preserve">
            <path d="M49.5,11c-21.5,0-39,17.5-39,39s17.5,39,39,39s39-17.5,39-39S71,11,49.5,11z M24.7,62c0-1.5,0.1-3,0.4-4.5l19.7-19.9  c1.5-0.3,3.1-0.4,4.7-0.4c0.2,0,0.5,0,0.7,0L24.8,62.7C24.7,62.5,24.7,62.2,24.7,62z M25.8,54.7c2.4-7.8,8.5-13.9,16.2-16.4  L25.8,54.7z M52.2,37.4c1.5,0.2,3,0.5,4.4,0.9L25.8,69.1c-0.4-1.4-0.7-2.9-0.9-4.4L52.2,37.4z M58.2,38.8c1.2,0.5,2.4,1,3.5,1.7  L47.3,54.9c-7.6,1-13.6,7.1-14.7,14.7L28,74.2c-0.6-1.1-1.2-2.3-1.7-3.5L58.2,38.8z M36.8,83.3c-0.2-0.1-0.3-0.2-0.5-0.3l0.1-0.1  C36.6,83,36.7,83.2,36.8,83.3z M66,76.6l7.3-7.3c-1.8,5.9-5.8,10.9-11,14C64,81.4,65.3,79.1,66,76.6z M74.3,62  c0,1.5-0.1,3.1-0.4,4.5l-7.4,7.4c0.1-0.7,0.1-1.4,0.1-2.1c0-1.1-0.1-2.1-0.3-3.2l7.9-7.9C74.3,61.2,74.3,61.6,74.3,62z M65.9,67  c-0.4-1.4-1-2.7-1.7-3.9l8.9-8.9c0.5,1.5,0.8,3,1,4.6L65.9,67z M63.4,61.8c-0.8-1.1-1.7-2.1-2.8-3l10-10c0.8,1.2,1.4,2.5,2,3.8  L63.4,61.8z M59.4,57.9c-1-0.7-2.2-1.4-3.4-1.9l11.3-11.3c0.9,0.9,1.7,1.8,2.4,2.9L59.4,57.9z M54.4,55.5c-1.6-0.5-3.2-0.7-4.9-0.7  L63,41.2c1.1,0.7,2.2,1.5,3.2,2.4L54.4,55.5z M32.4,71.9c0,1.7,0.3,3.3,0.7,4.9l-1.9,1.9c-0.9-1-1.7-2.1-2.4-3.2L32.4,71.9z   M33.7,78.3c0.5,1.2,1.1,2.3,1.9,3.4l-0.4,0.4c-1-0.7-2-1.5-2.9-2.4L33.7,78.3z M66.1,83c6.2-4.9,10.2-12.5,10.2-21  c0-14.8-12-26.8-26.8-26.8S22.7,47.2,22.7,62c0,8.5,4,16.1,10.2,21c-12.1-6.1-20.4-18.6-20.4-33c0-20.4,16.6-37,37-37s37,16.6,37,37  C86.5,64.4,78.2,76.9,66.1,83z"/>
        </svg>
        `,
        services: [
            {
                name: 'Création de plateformes de médiation',
                sub_services: [
                    'Sites web',
                    '(Applications)[Nous créons des applications web centrées sur l’exploration de données et l’expérience utilisateur. Dans un environnement interactif et didactique, l’utilisateur a la possibilité de découvrir les données par lui-même.]',
                    'Web-documentaires',
                    '(Serious Games)[Application web combinant des aspects pédagogiques ou d’information et un scénario ludique. Ce dernier favorise la rétention et l’implication de l’utilisateur.]'
                ]
            },
            {
                name: 'Édition scientifique augmentée',
                sub_services: [
                    'Création d\'articles et publications "augmentés"',
                    'Visualisation de données',
                    '(Long-form)[Scénarisation et édition web destiné à rendre intéressant et attrayant un contenu conséquent.]',
                    'Vidéos, animation, etc.'
                ]
            },
            {
                name: 'Communication digitale et institutionnelle scientifique',
                sub_services: [
                    'Stratégies digitales des organisations de recherche',
                    '(Community Management)[Gestion de la présence d\'une organisation sur les réseaux sociaux et autres espaces communautaires]',
                    'Refonte de sites internet',
                    'Relations publiques et relations presse'
                ]
            }
        ]
    },{
        title: 'Interfaces',
        detailed_title: 'Interfacer la recherche et la société',
        background_image: '../assets/images/photos/gare_de_lyon.jpg',
        color_class: 'interfaces-color',
        home_description: `Et si on remettait la science au coeur de notre société ? Nous voulons agir pour réhabiliter le rôle de la recherche dans le débat public et l’éclairage des politiques publiques.`,
        description: `Il est urgent de remettre les acquis de la recherche au coeur de nos projets de société (locaux, nationaux, européens) afin de tendre vers plus d’intelligence collective et donc un meilleur vivre ensemble. Nous souhaitons que la communauté scientifique participe à la démocratie, en particulier dans l’éclairage et la construction des politiques publiques.<br><br>

        Nous voulons concevoir avec les chercheurs, les citoyens et les élus, les moyens de reconnecter la recherche avec le débat public afin de tenir compte des enseignements capables de mieux prévenir, expliquer, et agir sur des problématiques sociales, sociétales, environnementales, économiques, etc.`,
        pictogram: `<svg class="pictogram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200" height="200"
            version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
            enable-background="new 0 0 100 100" xml:space="preserve">
            <path d="M75.3,40.4c0.5-2,0.7-4,0.7-6C76,20,64.2,8.2,49.8,8.2S23.6,20,23.6,34.4c0,2,0.3,4.1,0.8,6.1c-11,3.4-18.6,13.5-18.6,25  C5.8,80,17.5,91.8,32,91.8c6.8,0,13.1-2.6,18-7.2c4.9,4.6,11.3,7.2,18,7.2c14.5,0,26.2-11.8,26.2-26.2  C94.2,53.8,86.5,43.6,75.3,40.4z M26.8,41.9c0.2,0,0.4-0.1,0.6-0.1l-0.5,0.5C26.9,42.2,26.8,42.1,26.8,41.9z M55.8,61.1  C55.8,61.1,55.8,61.1,55.8,61.1l-1-1c0,0,0,0,0,0L55.8,61.1z M56.2,65.6c0,0.8,0,1.6-0.1,2.3l-9.3,9.3c-0.3-0.5-0.6-1.1-0.8-1.6  l10.2-10.2C56.2,65.4,56.2,65.5,56.2,65.6z M48.5,48.1L40,56.6c-0.6-0.2-1.1-0.5-1.6-0.8l4.4-4.4l4.5-4.5c0.4,0.4,0.9,0.7,1.3,1.1  C48.6,48,48.5,48.1,48.5,48.1z M54.9,52.9l4.7-4.7l6.9-6.9c0.5,0,1-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0L55.7,54.6  C55.5,54,55.2,53.5,54.9,52.9z M53.2,50.1l7.7-7.7c1-0.3,2.1-0.6,3.2-0.7l-9.9,9.9C53.8,51.1,53.5,50.6,53.2,50.1z M51.4,48  c1.8-1.7,3.8-3.1,5.9-4.1l-5.1,5.1C52,48.6,51.7,48.3,51.4,48z M44.5,60.1c0.3,0.1,0.7,0.1,1,0.2l-1.3,1.3  C44.2,61.1,44.3,60.6,44.5,60.1z M50.7,60.6C50.7,60.6,50.7,60.6,50.7,60.6l0.5,0.5l0.6-0.6c0.9-0.1,1.9-0.2,2.8-0.4L44.3,70.5  c-0.1-0.7-0.3-1.4-0.3-2.1l7.2-7.2L50.7,60.6z M56.1,63.3L45.3,74.1c-0.2-0.6-0.4-1.2-0.6-1.8l11-11C55.9,61.9,56,62.6,56.1,63.3z   M56.9,57.6c-0.2-0.5-0.3-1-0.5-1.5l6.7-6.7l7.8-7.8c0.6,0.1,1.3,0.2,1.9,0.3c0,0.1-0.1,0.2-0.1,0.3L57.5,57.3l0,0  C57.3,57.4,57.1,57.5,56.9,57.6z M46.1,45.9L37,55c-0.5-0.3-1-0.6-1.5-1l9.1-9.1C45.2,45.2,45.6,45.6,46.1,45.9z M43.3,44.2  l-8.9,8.9c-0.4-0.4-0.9-0.7-1.3-1.1l8.6-8.6C42.2,43.6,42.8,43.9,43.3,44.2z M34.3,46.1l3.9-3.9c0.6,0.2,1.2,0.4,1.9,0.6L32,50.9  c-0.4-0.4-0.8-0.9-1.1-1.3L34.3,46.1z M30,48.3c-0.3-0.5-0.7-1-1-1.5l5.4-5.4c0.7,0.1,1.4,0.2,2.1,0.3L30,48.3z M28.3,45.5  c-0.3-0.5-0.5-1.1-0.8-1.7l1-1l1.4-1.4c0.7-0.1,1.4-0.1,2.1-0.1c0.1,0,0.3,0,0.4,0L28.3,45.5z M44.4,54.4c-0.5,1.1-0.9,2.2-1.3,3.3  c-0.5-0.1-1-0.3-1.5-0.5L44.4,54.4z M43.8,65.6c0-0.5,0-1.1,0.1-1.6l2.8-2.8l-0.8-0.8c0,0,0,0,0,0l0.8,0.8l0.6-0.6  c0.8,0.1,1.5,0.1,2.3,0.1l-5.8,5.8C43.8,66.1,43.8,65.9,43.8,65.6z M47.6,78.5l8.1-8.1c-0.2,1.2-0.6,2.3-1,3.4L48.6,80  C48.2,79.5,47.9,79,47.6,78.5z M50.4,80.2l2.4-2.4c-0.8,1.4-1.8,2.7-2.9,3.9c-0.2-0.2-0.3-0.4-0.5-0.6L50.4,80.2z M61.2,55.7  l9.8-9.8C68.8,50.1,65.4,53.5,61.2,55.7z M49.8,10.2C63.1,10.2,74,21.1,74,34.4c0,1.8-0.2,3.6-0.6,5.5c-1.8-0.4-3.6-0.6-5.3-0.6  c-6.8,0-13.1,2.5-18,7.2l0,0l0,0c-4.9-4.6-11.2-7.2-18-7.2c-1.9,0-3.8,0.2-5.8,0.7c-0.4-1.9-0.7-3.7-0.7-5.6  C25.6,21.1,36.4,10.2,49.8,10.2z M32,89.8c-13.4,0-24.2-10.9-24.2-24.2c0-10.6,7-20,17.1-23.1c2.7,8.3,9.3,14.7,17.7,17.2l0,0l0,0  c-0.5,2-0.7,4-0.7,5.9c0,6.6,2.4,12.8,6.8,17.6C44.1,87.4,38.2,89.8,32,89.8z M68,89.8c-6.2,0-12.1-2.3-16.6-6.6  c4.4-4.8,6.8-11.1,6.8-17.6c0-2-0.2-4-0.7-6l0,0l0,0c8.2-2.5,14.7-9,17.3-17.2c10.3,3,17.5,12.4,17.5,23.2  C92.2,78.9,81.4,89.8,68,89.8z"/>
        </svg>
        `,
        services: [
            {
                name: 'Le LAB “Sciences et Société” de Skoli',
                sub_services: [
                    "Mise en relation de responsables publiques et d'organisations de recherche",
                    "Développement de plateformes de dialogues entre sciences et société",
                    "Développement de plateformes de co-construction du savoir",
                    "Organisation de manifestations publiques et rencontres autour de la Science ou de la culture scientifique"
                ]
            }
        ]
    }
];
