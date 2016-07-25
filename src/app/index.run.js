/*eslint no-unused-vars: [2, { "varsIgnorePattern": "^_"}]*/

export function runBlock ($log, $rootScope, $state, $stateParams) {
    'ngInject';
    // 
    // function onStateChangeSucces(e,toState, fromState, fromParams, toParams, opts){
    //     $log.log(opts, toParams);
    //     if(!toParams || !toParams.scroll_top){ return; }
    //     let target = angular.element('nav');
    //     if(toState.name === 'offer'){
    //         target = angular.element('.main__header + section');
    //     }
    //     let scroll_top = target.offset().top;
    //     $log.log('target', target, 'scroll_top', scroll_top);
    //     angular.element('body,html').scrollTop(scroll_top);
    //
    // }
    //
    // var _handler = $rootScope.$on('$stateChangeSuccess', onStateChangeSucces);

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $log.debug('runBlock end');
}
