export function routerConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('app', {
            abstract: true,
            template: '<ui-view autoscroll="true"/>',
            url: ''
        })
        .state('app.home', {
            data: { title: 'accueil' },
            url: '/',
            templateUrl: 'app/main/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('app.offer', {
            data: { title: 'offre' },
            url: '/offre',
            templateUrl: 'app/main/offer/offer.html',
            controller: 'OfferController',
            controllerAs: 'offer',
            resolve: {
                chapters: function(CHAPTERS, $stateParams){
                    var isFocused = function(chapter){
                        return ($stateParams['#'] || '') === chapter;
                    }
                    return CHAPTERS.map((chapter, i)=> {
                        chapter.order = isFocused(chapter.title.toLowerCase()) ? -1 : i;
                        return chapter;
                    });
                }
            }
        })
        .state('app.agency', {
            data: { title: 'agence' },
            url: '/agence',
            templateUrl: 'app/main/agency/agency.html',
            controller: 'AgencyController',
            controllerAs: 'agency'
        })
        .state('app.portfolio', {
            data: { title: 'portfolio' },
            abstract: true,
            template: '<ui-view/>',
            url: '/portfolio'
        })
        .state('app.portfolio.list', {
            templateUrl: 'app/main/portfolio/portfolio.html',
            controller: 'PortfolioController',
            controllerAs: 'portfolio',
            url: ''
        })
        .state('app.portfolio.details', {
            url: '/:slug',
            templateUrl: 'app/main/portfolio/details/details.html',
            controller: 'DetailsController',
            controllerAs: 'details',
            resolve: {
                project: (PROJECTS, $stateParams, $state, $log, $q)=>{
                    const deferred = $q.defer();
                    const slug = $stateParams.slug;
                    const project = PROJECTS.find((project)=>project.slug == slug);
                    if(slug && project){
                        deferred.resolve(project);
                    } else {
                        deferred.reject();
                    }
                    return deferred.promise.catch(()=>{
                        $state.transitionTo('app.portfolio.list', {'#':'top'});
                    })
                }
            }
        })
        .state('app.about', {
            data: { title: 'À propos' },
            url: '/a-propos',
            templateUrl: 'app/main/about/about.html'
        })
        .state('app.typography', {
            data: { title: 'typo' },
            url: '/typography',
            templateUrl: 'app/main/typography-rules.html',
            controller: function(){

            },
            controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/');
}
