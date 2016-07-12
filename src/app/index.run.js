export function runBlock ($log, $rootScope, $state, $stateParams) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}
