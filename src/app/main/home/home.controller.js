export class HomeController {
    constructor ($scope, CHAPTERS, parallaxHelper) {
        'ngInject';
        $scope.background = parallaxHelper.createAnimator(-0.3);
        this.chapters = CHAPTERS;
    }

    listChapters(){
        return this.chapters;
    }

}
