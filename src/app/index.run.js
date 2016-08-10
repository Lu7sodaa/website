/*eslint no-unused-vars: [2, { "varsIgnorePattern": "^_"}]*/

export function runBlock ($log, $rootScope, $state, $stateParams) {
    'ngInject';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

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
