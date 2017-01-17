export function GridDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: false,
    scope: {
        gridOnItemClicked: '&',
        gridUseFullscreen: '=',
        gridUseContactItem: '=',
        gridItems: '='
    },
    templateUrl: 'app/components/grid/grid.html',
    controller: GridController,
    controllerAs: 'grid',
    bindToController: true
  };
  return directive;
}

class GridController {
    constructor ($log, $window) {
        'ngInject';
        this.id = (new Date()).getTime();
        this.$log = $log;
        this.$window = $window;
    }

    onItemClicked(item){
        if(this.gridOnItemClicked){
            this.$log.log('GridController.onItemClicked(',item,')');
            this.gridOnItemClicked({item:item});
        }
    }

    listGridItems(){
        return this.gridItems;
    }

    openExternal(link){
        this.$window.open(link, '_self');
    }
}
