export function SidebarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/sidebar/sidebar.html',
    scope: {
        onSidebarClose: '&'
    },
    controller: SidebarController,
    controllerAs: 'sidebar',
    bindToController: true
  };

  return directive;
}

class SidebarController {
    constructor ($log, $window, $state) {
        'ngInject';
        this.$w = $window;
        this.$state = $state;
    }

    scrollToBottom(){
        let scroll_top = angular.element('div[ui-view]').innerHeight();
        angular.element('html,body').animate({
            scrollTop:  scroll_top
        });
    }

    close(){
        if(this.onSidebarClose){
            this.onSidebarClose();
        }
    }

}
