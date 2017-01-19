export function PageDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    transclude: true,
    scope: {
        details: '=',
        mainClass: '@',
        hideNavbar: '='
    },
    templateUrl: 'app/components/page/page.html',
    controller: PageController,
    controllerAs: 'page',
    bindToController: true
  };
  return directive;
}

class PageController {
    constructor(){
        'ngInject';
        this.sidebar_opened = false;
    }

    toggleSidebar(){
        this.sidebar_opened = !this.sidebar_opened;
    }
    closeSidebar(){
        this.sidebar_opened = false;
    }
}
