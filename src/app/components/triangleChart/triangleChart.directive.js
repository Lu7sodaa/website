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
        this.$window = angular.element($window);
        this._element = angular.element($element[0]);
        this.$element = d3.select($element[0]);
        this.$axis = this.$element.select('.triangle-chart__axis');
        this.$svg = this.$element.select('svg');
        this.overlapx = 60;
        this.margin = {
            left: 85,
            right: 30,
            top: 0,
            bottom: 0
        }

        this.onResize();
        this.bindEvents();
        $timeout(()=>{ this.draw(); }, 1000 );
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{
            this.onResize();
            this.redraw();
        });
    }

    drawTriangle(d,i,notZero){
        let triangleWidth = this.triangleWidth;
        let overlapx = this.overlapx;
        let xStart = i * triangleWidth - overlapx;
        let xMiddle = xStart + (triangleWidth/2)+overlapx/2;
        let xEnd = xStart + triangleWidth + overlapx;
        let yStart = this.height;
        let yMax = this.scales.y(d.value)
        if(!notZero){
            yMax = this.height;
        }

        return `
        M ${xStart} ${yStart}
        L ${xMiddle} ${yMax}
        L ${xEnd} ${yStart}
        L ${xStart} ${yStart}
        `;
    }

    stepLeft(d,i){
        return (this.triangleWidth * i) + this.overlapx + 30 + 'px';
    }

    stepWidth(){
        return this.triangleWidth - this.overlapx + 'px';
    }

    redraw(){
        this.$g.selectAll('.path')
            .attr('d', (d,i)=>{ return this.drawTriangle(d,i); });

        this.$axis.selectAll('.step')
            .style('left', (d,i)=>{ return this.setpLeft(d,i); })
            .style('width', ()=>{ return this.setpWidth(); });
    }

    draw(){
        this.$g.selectAll('.path')
            .data(this.data)
            .enter()
                .append('path')
                .attr('class', 'path')
                .attr('d', (d, i)=>{ return this.drawTriangle(d,i); })
                .transition()
                    .duration(2000)
                    .attr('d', (d, i)=>{ return this.drawTriangle(d,i, true); });

        let steps = this.$axis
            .selectAll('.step')
            .data(this.data)
            .enter()
                .append('div')
                .attr('class', 'step')
                .style('left', (d,i)=>{ return this.stepLeft(d,i); })
                .style('width', ()=>{ return this.stepWidth(); })

        steps.append('h3').text(function(d){ return d.name });
        steps.append('p').text(function(d){ return d.description; });
    }

    onResize(){
        this.width = this.getWidth() - this.margin.left - this.margin.right;
        this.height = this.getHeight() - this.margin.top - this.margin.bottom;
        this.triangleWidth = this.width / this.data.length;


        let yMax = d3.max(this.data, function(d){ return d.value; });
        this.scales = {
            y: d3.scaleLinear().domain([0, yMax]).range([this.height, 0]),
            x: d3.scaleLinear().domain([0, this.data.length]).range([0, this.width])
        }

        this.$svg
            .attr('width', this.getWidth())
            .attr('height', this.height);

        if(!this.$svg.select('g').size()){
            this.$g = this.$svg.append('g')
                .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
        }
    }


    getWidth(){
        return this.$window.width();
    }

    getHeight(){
        return this.$window.height() * 0.33;
    }




}
