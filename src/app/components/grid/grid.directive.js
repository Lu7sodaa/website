export function GridDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: false,
    scope: {
        gridDetailsState: '@',
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
        $log.log(this);
        this.id = (new Date()).getTime();
        this.$log = $log;
        this.$window = $window;
        this.items = [];
        for(let i=0; i<this.gridItems.length; i++){
            const item = Object.assign(this.gridItems[i], {id: i});
            this.items.push(item);
        }
    }

    onItemClicked(item, index){
        if(this.gridOnItemClicked){
            this.gridOnItemClicked({item:item, index:index});
        }
    }

    listGridItems(){
        return this.items;
    }

    openExternal(link){
        this.$window.open(link, '_self');
    }
}
