export function PageDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    transclude: true,
    scope: {
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
    }
}
