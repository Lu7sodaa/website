export function BackgroundImageDirective(){
    let directive = {
        restrict: 'A',
        controller: BackgroundImageController,
        bindToController: true
    };
    return directive;
}


class BackgroundImageController {
    constructor($element, $attrs, $log){
        'ngInject';
        $log.debug('attrs: ', $attrs);
        let $el = angular.element($element[0]);
        let url = `url('${$attrs.backgroundImage}')`;
        $el.css('background-image', url)
    }
}
