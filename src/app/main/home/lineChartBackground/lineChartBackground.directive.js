export function LineChartBackgroundDirective(){
    let directive = {
        restrict: 'C',
        controller: LineChartBackgroundController,
        bindToController: true
    };
    return directive;
}


class LineChartBackgroundController {
    constructor($window, $element, $scope, $timeout, $log, LINE_CHART_DATA){
        'ngInject';
        this.$log = $log;
        this.data = LINE_CHART_DATA;
        this.$scope = $scope;
        this.$window = angular.element($window);
        this.$origin_el = angular.element($element[0]);
        this.$element = d3.select($element[0]);
        this.bindEvents();
        this.draw();
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{ this.resize(); })
    }

    draw(){
        this.setUpSVG();
        this.resize();
        this.drawLines();
    }

    setUpSVG(){
        this.$svg = this.$element.append('svg');
        this.$g = this.$svg.append('g');
    }

    line(){
        return d3.line().curve(d3.curveCatmullRom)
            .x((d,i)=>{
                return this.scales.x(i);
            })
            .y((d)=>{
                return this.scales.y(d);
            });
    }

    drawLines(){
        this.$g.selectAll('.path')
            .data(this.data)
            .enter()
                .append('path')
                .attr('class', function(d){
                    return 'path ' + d.color_class;
                })
                .classed('animated', function(d){
                    return d.animated;
                })
                .datum(function(d){
                    return d.values;
                })
                .attr('d', this.line())
                .style('opacity', function(){
                    return d3.select(this).classed('animated') ? 0 : 1;
                })
                .each((d,i,l)=>{
                    this.animateLine(d3.select(l[i]), this.data[i]);
                });
    }

    animateLine(path, dataset){
        if(path.classed('animated')){
            path.transition()
                .delay(200)
                .style('opacity', 1)
                .duration(()=>{
                    return 3000 + dataset.animation_delay;
                })
                .attrTween("stroke-dasharray", function(){
                    let l = path.node().getTotalLength();
                    let _interpolate = d3.interpolateString("0,"+l, l + "," + l);
                    return (t)=>{
                        return _interpolate(t);
                    };
                });
        }
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

        this.$g.selectAll('.path')
            .attr('d', this.line())
            .attr('stroke-dasharray', function(){
                let l = d3.select(this).node().getTotalLength();
                return `${l},${l}`;
            });
    }



}
