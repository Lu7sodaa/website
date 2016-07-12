export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'nav',
    bindToController: true
  };

  return directive;
}

class NavbarController {
    constructor ($log, $rootScope, EVENTS) {
        'ngInject';
        this.$log = $log;
        this.sidebar_opened = false;
        this.EVENTS = EVENTS;
        this.$rootScope = $rootScope;
        this.$state = $rootScope.$state;
    }

    toggleSidebar(){
        this.sidebar_opened = !this.sidebar_opened;
        this.$rootScope.$broadcast(this.EVENTS.sidebar.toggle, this.sidebar_opened);
    }

}
