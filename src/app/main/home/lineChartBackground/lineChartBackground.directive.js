var DATA = [
    {
        color_class: 'light-grey',
        values: [ 12, 10, 5, 8, 11, 13, 15, 16 ]
    },{
        color_class: 'light-grey',
        values: [ 13, 14, 16, 16, 17, 18, 20, 21 ]
    },{
        color_class: 'light-grey',
        values: [ 20, 19, 19, 21, 19, 17, 15, 14 ]
    },{
        color_class: 'light-grey',
        values: [ 15, 12, 17, 13, 12, 14, 12, 11 ]
    },{
        color_class: 'light-grey',
        values: [ 11, 12, 9, 7, 8, 10, 10, 11 ]
    },{
        color_class: 'interfaces-color',
        values: [ 8, 12, 10.5, 16, 21, 18, 19, 18 ]
    },{
        color_class: 'design-color',
        values: [ 13, 18, 16.5, 13, 14, 11, 15, 17 ]
    },{
        color_class: 'data-color',
        values: [ 10, 9, 8, 10, 15, 17, 17, 18 ]
    }
];

export function LineChartBackgroundDirective(){
    let directive = {
        restrict: 'C',
        controller: LineChartBackgroundController,
        bindToController: true
    };
    return directive;
}


class LineChartBackgroundController {
    constructor($window, $element, $scope, $timeout, $log){
        'ngInject';
        this.$log = $log;
        this.data = DATA;
        this.$scope = $scope;
        this.$window = angular.element($window);
        this.$origin_el = angular.element($element[0]);
        this.$element = d3.select($element[0]);
        this.bindEvents();
    }

    bindEvents(){
        this.$scope.$on('$stateChangeSuccess', ()=>{
            this.draw();
        });
        this.$window.bind('resize', ()=>{ this.resize(); })
    }

    draw(){
        this.setUpSVG();
        this.resize();
        this.drawArea();
    }

    setUpSVG(){
        this.$svg = this.$element.append('svg');
        this.$g = this.$svg.append('g');
    }

    line(not_zero_val){
        return d3.line().curve(d3.curveCatmullRom)
            .x((d,i)=>{
                return this.scales.x(i);
            })
            .y((d)=>{
                return this.scales.y(not_zero_val ? d : 0);
            });
    }

    drawArea(){
        this.data.forEach((dataset)=>{
            let klass = 'path ' + dataset.color_class;
            this.$g.append('path')
                .attr('class', klass)
                .datum(dataset.values)
                .attr('d', this.line(true));
        });
    }

    resize(){
        this.width  = this.$window.width();
        this.height = (this.$window.height()) * 0.7;

        this.scales = {
            x: d3.scaleLinear().domain([0, 7]).range([0, this.width ]),
            y: d3.scaleLinear().domain([0, 25]).range([this.height, 0])
        }

        this.$svg.attr('width', this.width)
            .attr('height', this.height);

        this.$svg.selectAll('.path')
            .attr('d', this.line(true));
    }



}
