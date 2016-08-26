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
    constructor ($element) {
        'ngInject';
        $element = angular.element($element[0]);
        let h = $element.height() - 37;
        angular.element('.main').css('padding-bottom', h);
    }
}
