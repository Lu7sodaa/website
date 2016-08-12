export function FooterDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/footer/footer.html',
        controller: FooterController,
        controllerAs: 'footer',
        // priority: -10,
        bindToController: true
    };

    return directive;
}

class FooterController {
    constructor ($element, platformService) {
        'ngInject';
        $element = angular.element($element[0]);
        let h = $element.height() - 37;
        if(platformService.isSafari()){
            angular.element('.main').css('padding-bottom', h);
        } else {
            angular.element('.main .inner').css('margin-bottom', h);
        }
    }
}
