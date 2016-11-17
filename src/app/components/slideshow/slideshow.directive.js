export function SlideshowDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    scope: {
        'slides': '='
    },
    templateUrl: 'app/components/slideshow/slideshow.html',
    controller: SlideshowController,
    controllerAs: 'slideshow',
    bindToController: true
  };
  return directive;
}

class SlideshowController {
    constructor ($log,$timeout,$scope, $element,$window, parallaxHelper) {
        'ngInject';
        this.$log = $log;
        this.$window = $window;
        this.$timeout = $timeout;
        $log.log('slides', this.slides)
        this.animationTimeout = 4000;
        this.activeIndex = 0;
        this.$el = angular.element($element[0]);
        this.$w =  angular.element($window);
        this.background =  parallaxHelper.createAnimator(-0.3);
        this.windowWidth = this.$w.width();

        this.$w.bind('resize', ()=>{
            $scope.$apply(()=>{
                this.windowWidth = this.$w.width();
            });
        });
        //
        // if(this.hasManySlides()){
        //     this.startAnimation();
        // }
    }
    holderLeftStyle(){
        return -this.activeIndex * this.windowWidth;
    }
    slideLeftStyle(i){
        return (i * this.windowWidth);
    }

    openSlide(url){
        this.$window.open(url);
    }


    hasManySlides(){ return this.slides.length > 1 }
    startAnimation(){
        this.$timeout(()=>{
            this.activeIndex += 1;
            if(this.activeIndex >= this.slides.length){
                this.activeIndex = 0;
            }
            this.startAnimation();
        }, this.animationTimeout);
    }
}
