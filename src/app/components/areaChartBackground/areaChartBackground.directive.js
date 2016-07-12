export function AreaChartBackgroundDirective(){
    let directive = {
        restrict: 'C',
        controller: AreaChartBackgroundController,
        bindToController: true
    };
    return directive;
}


class AreaChartBackgroundController {
    constructor($window, $element){
        'ngInject';
        this.$window = angular.element($window);
        this.$element = $element;
        this.config = { vertices: 500, velocity: .2, margin: 100};
        this.resize();
        this.bindEvents();
    }


    resize(){
        this.vertices = [];
        let $el = d3.select(this.$element[0]);
        this.width =  this.$element.width();
        this.height = this.$element.height() + 60;
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{ this.resize(); })
    }

    draw(){
        let margin = this.config.margin;
    }

}
