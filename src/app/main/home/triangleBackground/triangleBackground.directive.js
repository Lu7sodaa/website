// most parts of this directive's code are taken from the following gist:
// http://bl.ocks.org/christophermanning/4248988

export function TriangleBackgroundDirective(){
    let directive = {
        restrict: 'C',
        controller: TriangleBackgroundController,
        bindToController: true
    };
    return directive;
}


class TriangleBackgroundController {
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
        this.height = this.$element.height() + 75;

        if(this.$svg){
            this.$svg.select('g').remove();
        } else {
            this.$svg = $el.append('svg');
        }
        this.$svg.append('g');

        d3.range(this.config.vertices - this.vertices.length)
            .forEach(()=>{
                this.vertices.unshift(
                    [ (Math.random() * (this.width + this.config.margin*2)) - this.config.margin, (Math.random() * (this.height + this.config.margin*2)) - this.config.margin ]
                )
            });

        this.$svg.attr('height', this.height)
                 .attr('width', this.width);

        this.draw();
    }

    bindEvents(){
        this.$window.bind('resize', ()=>{ this.resize(); })
    }

    draw(){
        let margin = this.config.margin;
        if(this.vertices.length < this.config.vertices) {
            for (var i = 0; i < (this.config.vertices-this.vertices.length); i++) {
                if(Math.random() <= .50){
                    this.vertices.unshift(
                        [ -margin, Math.random() * this.height ])
                } else {
                    this.vertices.unshift(
                        [ (Math.random() * (this.width + margin)) - margin, - margin ]);
                }
            }
        }

        this.vertices = this.vertices.map((d)=>{
            d[0] = d[0] + this.config.velocity;
            d[1] = d[1] + this.config.velocity;
            return d;
        }).filter((d)=>{
            return d[0] < this.width + margin && d[1] < this.height + margin;
        });

        this.delaunay = d3.voronoi().triangles(this.vertices);

        let path = this.$svg.select('g')
            .selectAll("path")
            .data(this.delaunay)
            .enter()
            .append("path");

        path
            .attr("d", d3.line());


        path.exit().remove();
    }

}
