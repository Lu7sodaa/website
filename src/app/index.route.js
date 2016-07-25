export function routerConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('app', {
            abstract: true,
            template: '<ui-view autoscroll="true"/>',
            url: '/'
        })
        .state('app.home', {
            data: { title: 'acceuil' },
            url: '',
            templateUrl: 'app/main/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('app.offer', {
            data: { title: 'offre' },
            url: 'offre',
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
            url: 'agence',
            templateUrl: 'app/main/agency/agency.html',
            controller: 'AgencyController',
            controllerAs: 'agency'
        });

    $urlRouterProvider.otherwise('/');
}
