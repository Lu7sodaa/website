export function AreaChartBackgroundDirective(){
    let directive = {
        restrict: 'C',
        controller: AreaChartBackgroundController,
        bindToController: true
    };
    return directive;
}


class AreaChartBackgroundController {
    constructor($window, $element, $log){
        'ngInject';
        this.$log = $log;
        this.data = [
            [
                {pos: 1, value: 8},
                {pos: 2, value: 6},
                {pos: 3, value: 8},
                {pos: 4, value: 10},
                {pos: 5, value: 15},
                {pos: 6, value: 18},
                {pos: 7, value: 17}
            ],
            [
                {pos: 1, value: 13},
                {pos: 2, value: 18},
                {pos: 3, value: 16.5},
                {pos: 4, value: 13},
                {pos: 5, value: 14},
                {pos: 6, value: 8},
                {pos: 7, value: 12}
            ]
        ];
        this.data.forEach(function(dataset){
            dataset.forEach(function(d){
                d.date = d3.timeParse('%Y-%m-%d')(d.date);
            });
        });

        this.$log.log(this.data);


        this.$window = angular.element($window);
        this.$origin_el = angular.element($element[0]);
        this.$element = d3.select($element[0]);
        this.$svg = this.$element.append('svg');
        this.bindEvents();
        this.resize();
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{ this.resize(); })
    }

    resize(){
        this.width  = this.$window.width();
        this.height = this.$origin_el.height() * 0.75;

        this.scales = {
            x: d3.scaleLinear().domain([1, 7]).range([0, this.width ]),
            y: d3.scaleLinear().domain([0, 20]).range([this.height, 0])
        }

        if(this.$g){
            this.$g.remove();
        }

        this.$g = this.$svg.append('g');

        this.$svg
            .attr('width', this.width)
            .attr('height', this.height);

        this.draw();
    }

    draw(){
        let area = (datum, field)=>{
            return d3.area()
                .x((d)=>{
                    return this.scales.x(d.pos);
                })
                .y0(this.height)
                .y1((d)=>{
                    return this.scales.y(d[field] || 0);
                })(datum);
        }

        this.data.forEach((dataset, i)=>{
            let klass = 'area ' + (i % 2 == 0 ? '' : 'even');
            this.$g.append('path')
                .attr('class', klass)
                .attr('d', area(dataset))
                .transition()
                    .duration(1500)
                    .attr('d', area(dataset, 'value'));
        });
    }

}
