var DATA = [
    [
        {pos: 1, value: 10},
        {pos: 2, value: 9},
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
        {pos: 6, value: 11},
        {pos: 7, value: 12}
    ]
];

export function AreaChartBackgroundDirective(){
    let directive = {
        restrict: 'C',
        controller: AreaChartBackgroundController,
        bindToController: true
    };
    return directive;
}


class AreaChartBackgroundController {
    constructor($window, $element, $timeout, $log){
        'ngInject';
        this.$log = $log;
        this.data = DATA;

        this.$window = angular.element($window);
        this.$origin_el = angular.element($element[0]);
        this.$element = d3.select($element[0]);
        this.bindEvents();
        $timeout(()=>{ this.draw(); }, 500 );
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{ this.resize(); })
    }

    draw(){
        this.setUpSVG();
        this.resize();
        this.addGradientDefs();
        this.drawArea();
    }

    setUpSVG(){
        this.$svg = this.$element.append('svg');
        this.$g = this.$svg.append('g');
    }

    addGradientDefs(){
        // adds gradient definitions inspired by https://bl.ocks.org/mbostock/3969722
        this.$gradient = this.$svg.append('defs').append('linearGradient')
            .attr("gradientUnits", "userSpaceOnUse")
            .attr('id', 'linearFadeinGradient')
            .attr('x1', '0').attr('y1', this.scales.y(2))
            .attr('x2', '0').attr('y2', this.scales.y(20));

        this.$gradient.selectAll('stop')
            .data([
                { offset: '0%',   opacity: '0' },
                { offset: '20%',   opacity: '0.1' },
                { offset: '100%', opacity: '1' }
            ])
            .enter().append('stop')
                .attr('stop-opacity', function(d){ return d.opacity; })
                .attr('stop-color', '#007FD2')
                .attr('offset', function(d){ return d.offset; });
    }

    area(field){
        return d3.area()
            .x((d)=>{
                return this.scales.x(d.pos);
            })
            .y0(this.height)
            .y1((d)=>{
                return this.scales.y(d[field] || 0);
            });
    }

    drawArea(){
        this.data.forEach((dataset, i)=>{
            let klass = 'area ' + (i % 2 == 0 ? '' : 'even');
            this.$g.append('path')
                .attr('class', klass)
                .datum(dataset)
                .attr('d', this.area())
                .transition()
                    .duration(2000)
                    .attr('d', this.area('value'));
        });
    }

    resize(){
        this.width  = this.$window.width();
        this.height = (this.$window.height() - 50) * 0.7;

        this.scales = {
            x: d3.scaleLinear().domain([1, 7]).range([0, this.width ]),
            y: d3.scaleLinear().domain([0, 20]).range([this.height, 0])
        }

        this.$svg.attr('width', this.width)
            .attr('height', this.height);

        this.$svg.selectAll('.area')
            .attr('d', this.area('value'));
    }



}
