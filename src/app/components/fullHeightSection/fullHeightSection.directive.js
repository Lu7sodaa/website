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
    constructor($window, $scope, $element, $log, platformService){
        'ngInject';

        this.platformService = platformService;
        this.$log = $log;
        this.$element = $element;
        this.$scope = $scope;
        this.$window = angular.element($window);

        this.bindEvents();
        this.resize();
    }

    isMobileOrTablet(){
        return this.platformService.isMobileOrTablet();
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{
            if(!this.isMobileOrTablet()){
                this.resize();
            }
        });
    }

    resize(){
        let h = this.$window[0].innerHeight;
        this.$element.windowHeight = h - 50;
        this.$element.height(h);
    }
}
