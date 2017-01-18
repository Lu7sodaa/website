export function PageDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    transclude: true,
    scope: {
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
    constructor($log){
        'ngInject';
        $log.log('this.mainClass', this.mainClass);
        this.sidebar_opened = false;
    }
    toggleSidebar(){
        this.sidebar_opened = !this.sidebar_opened;
    }
    closeSidebar(){
        this.sidebar_opened = false;
    }
}
