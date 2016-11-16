export class HomeController {
    constructor ($scope, CHAPTERS, PROJECTS, parallaxHelper) {
        'ngInject';
        $scope.background = parallaxHelper.createAnimator(-0.3);
        this.chapters = CHAPTERS;
        this.projectsSlide = PROJECTS;
    }

    listChapters(){
        return this.chapters;
    }

}
