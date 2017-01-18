export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    scope: {
        'onToggleSidebar': '&',
        'hide': '='
    },
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'nav',
    bindToController: true
  };
  return directive;
}

class NavbarController {
    constructor ($log, $rootScope,$element,$document,$window, $stateParams, platformService, PROJECTS, EVENTS) {
        'ngInject';
        this.$log = $log;
        this.sidebar_opened = false;
        this.EVENTS = EVENTS;
        this.$rootScope = $rootScope;
        this.$state = $rootScope.$state;
        this.$nav = angular.element($element[0]);
        this.revealed_class = 'navbar--revealed';
        let w = angular.element($window);
        if(this.hide && !platformService.isMobileOrTablet()){
            let scroll_top_trigger = w.height() - 60;
            // console.log('scroll_top_trigger', scroll_top_trigger);
            $document.bind('scroll', ()=>{
                let scroll_top = $document.scrollTop();
                let trigger = scroll_top >= scroll_top_trigger - 60;
                this.$nav.toggleClass(this.revealed_class, trigger);
            });
        } else {
            this.$nav.addClass(this.revealed_class);
        }

        if(this.isProjectDetails()){
            this.currentProject = PROJECTS.find((project)=>project.slug == $stateParams.slug)
        }
    }

    isProjectDetails(){
        return this.$state.is('app.portfolio.details');
    }

    toggleSidebar(){
        if(this.onToggleSidebar){
            this.onToggleSidebar();
        }
    }

}
