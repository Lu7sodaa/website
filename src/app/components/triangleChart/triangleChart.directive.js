export function TriangleChartDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    template: `
        <div class="triangle-chart">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
            <div class="triangle-chart__axis"></div>
        </div>
    `,
    scope: {
        data: '='
    },
    controller: TriangleChartController,
    controllerAs: 'chart',
    priority: -10,
    bindToController: true
  };

  return directive;
}

class TriangleChartController {
    constructor($element, $log, $window, $timeout){
        'ngInject';
        this.$timeout = $timeout;
        this.$window = angular.element($window);
        this._element = angular.element($element[0]);
        this.$element = d3.select($element[0]);
        this.$axis = this.$element.select('.triangle-chart__axis');
        this.$svg = this.$element.select('svg');

        this.scale = d3.scaleLinear().domain([0, d3.max(this.data, function(d){ return d.value; }) ]),
        this.overlapx = 60;
        this.margin = {
            left: 85,
            right: 30,
            top: 0,
            bottom: 0,
            mobile: {
                left: 0,
                right: 0,
                top: 60,
                bottom: 0
            }
        }

        this.onResize();
        this.bindEvents();
        this.draw();
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{
            this.$timeout(()=>{
                this.onResize();
                this.redraw();
            }, 300);
        });
    }

    drawTriangle(d,i,notZero){
        let triangleWidth = this.triangleWidth,
            overlapx = this.overlapx,
            x0 = i * triangleWidth - overlapx,
            x1 = x0 + (triangleWidth/2)+overlapx/2,
            x2 = x0 + triangleWidth + overlapx,
            x3 = x0,
            y0 = this.height,
            y1 = this.scale(d.value),
            y2 = y0,
            y3 = y0;


        if(this.isMobile()){
            x0 = 0;
            x1 = this.scale(d.value);
            x2 = x0;
            x3 = x0;
            y0 = i * triangleWidth - overlapx;
            y1 = y0 + triangleWidth/2 + overlapx/2;
            y2 = y0 + triangleWidth + overlapx;

            if(!notZero){
                x1 = 0;
            }
        } else {
            if(!notZero){
                y1 = this.height;
            }
        }

        return `
        M ${x0} ${y0}
        L ${x1} ${y1}
        L ${x2} ${y2}
        L ${x3} ${y3}
        `;
    }

    steps($steps){
        let size = this.triangleWidth - this.overlapx + 'px';
        let windowWidth = this.$window.width();
        // reset steps previous style
        $steps.style('left', '');
        $steps.style('top', '');
        $steps.style('width', '');
        $steps.style('height', '');
        if(this.isMobile()){
            let stepWidth = windowWidth - this.svgWidth - 30 + 'px';
            $steps = $steps
                .style('width', stepWidth)
                .style('top',  (d,i)=>{
                    return (this.triangleWidth * i) + this.overlapx/2 + 15 + 'px';
                })
                .style('height',  size);
        }
        else {
            let reduced = windowWidth < 900;
            let offset = this.overlapx + 25;
            if(reduced){
                size = (this.triangleWidth - this.overlapx/3) + 'px';
                offset -= this.overlapx/4;
            }
            $steps
                .style('left',  (d,i)=>{
                    return (this.triangleWidth * i) + offset + 'px';
                })
                .style('width', size);
        }
        return $steps;
    }



    redraw(){
        this.$g.selectAll('.path')
            .attr('d', (d,i)=>{ return this.drawTriangle(d,i, true); });

        this.steps(this.$axis.selectAll('.step'));

    }

    draw(){
        var paths = this.$g.selectAll('.path')
            .data(this.data)
            .enter()
                .append('path')
                .attr('class', 'path')
                .attr('d', (d, i)=>{ return this.drawTriangle(d,i); });
        paths.transition()
            .duration(2000)
            .attr('d', (d, i)=>{ return this.drawTriangle(d,i, true); });

        var steps = this.$axis
                .selectAll('.step')
                .data(this.data)
                .enter()
                    .append('div')
                    .attr('class', 'step');

        this.steps(steps);


        steps.on('mouseover', function(d,i){
            d3.selectAll('path').classed('hover', function(d,_i){ return i == _i; });
            d3.select(this).classed('hover', true);
        }).on('mouseout', function(){
            d3.selectAll('path').classed('hover', false);
            d3.select(this).classed('hover', false);
        });

        paths.on('mouseover', function(d,i){
            d3.selectAll('.step').classed('hover', function(d,_i){ return i == _i; });
            d3.select(this).classed('hover', true);
        }).on('mouseout', function(){
            d3.selectAll('.step').classed('hover', false);
            d3.select(this).classed('hover', false);
        });

        steps.append('h4').text(function(d){ return d.name }).attr('class', 'small-underline');
        steps.append('p').text(function(d){ return d.description; });
    }

    onResize(){
        this.width         = this.$window.width();
        this.height        = this.$window.height() * 0.33;
        this.triangleWidth = this.width / this.data.length - this.overlapx/3;


        let isMobile   = this.isMobile(),
            margin     = isMobile ? this.margin.mobile : this.margin;

        if(isMobile){
            this.height = this.data.length * 175;
            this.width = this.$window.width() * 0.4;
            this.triangleWidth = this.height / this.data.length;

        }

        this.width  = this.width  - margin.left - margin.right;
        this.height = this.height - margin.top -  margin.bottom;

        this.svgHeight = this.height;
        this.svgWidth = this.width + margin.left + margin.right;

        this.scale = this.scale.range([this.height, 0]);
        if(isMobile){
            this.scale = this.scale.range([0, this.width]);
            this.svgHeight += this.overlapx*2;
        }

        this.$svg
            .attr('width',  this.svgWidth)
            .attr('height', this.svgHeight);

        if(!this.$svg.select('g').size()){
            this.$g = this.$svg.append('g');
        }

        this.$g.attr('transform', `translate(${margin.left},${margin.top})`);

        this.$element.classed('mobile', isMobile);
    }

    isMobile(){
        return this.$window.width() < 720;
    }


}
