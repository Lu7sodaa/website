export function FullHeightSectionDirective(){
    'ngInject';

    let directive = {
        restrict: 'C',
        controller: FullHeightSectionController,
        bindToController: true
    }
    return directive;
}

class FullHeightSectionController {
    constructor($window, $scope, $element, $log){
        'ngInject';

        this.$log = $log;
        this.$element = $element;
        this.$scope = $scope;
        this.$window = angular.element($window);

        this.bindEvents();
        this.resize();
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{
            this.resize();
        });
    }

    resize(){
        let h = this.$window[0].innerHeight - 50;
        this.$element.windowHeight = h;
        this.$element.height(h);
    }
}
