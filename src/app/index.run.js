/*eslint no-unused-vars: [2, { "varsIgnorePattern": "^_"}]*/

export function runBlock ($log, $rootScope, $state, $stateParams, $anchorScroll, $location) {
    'ngInject';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.stateChangeSuccessHandler = $rootScope.$on('$stateChangeSuccess', ()=>{
        const hash = $location.hash();
        if(hash){
            $anchorScroll(hash);
        }
    });

    $rootScope.slideLeft = function($el){
        $el.addClass('slide-left');
    };

    $rootScope.slideRight = function($el){
        $el.addClass('slide-right');
    };

    $rootScope.fadeIn = function($el){
        $el.addClass('fade-in');
    }

    $log.debug('runBlock end');
}
