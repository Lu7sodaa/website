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
    constructor ($log, $rootScope,$window, EVENTS) {
        'ngInject';
        this.$w = $window;
        this.$state = $rootScope.$state;

        this.handler = $rootScope.$on(EVENTS.sidebar.toggle, (e, data)=>{
            $rootScope.sidebar_opened = data;
        });

        $rootScope.sidebar_opened = false;
        this.$scope = $rootScope;
    }

    scrollToBottom(){
        let scroll_top = angular.element('div[ui-view]').innerHeight();
        this.$scope.sidebar_opened = false;
        angular.element('html,body').animate({
            scrollTop:  scroll_top
        });
    }

}
