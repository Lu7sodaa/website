export function SidebarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/sidebar/sidebar.html',
    scope: {},
    controller: SidebarController,
    controllerAs: 'sidebar',
    bindToController: true
  };

  return directive;
}

class SidebarController {
    constructor ($log, $rootScope, EVENTS) {
        'ngInject';
        $rootScope.sidebar_opened = false;
        this.$log = $log;
        this.$state = $rootScope.$state;
        this.handler = $rootScope.$on(EVENTS.sidebar.toggle, (e, data)=>{
            $rootScope.sidebar_opened = data;
        });
    }

    scrollTo(selector){
        let $el = angular.element(selector);
        let scroll_top = $el.offset().top;
        this.$log.log('scroll: ', scroll_top);
        angular.element('.view').scroll(scroll_top);
    }

}
