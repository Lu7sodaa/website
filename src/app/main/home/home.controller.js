export class HomeController {
    constructor ($scope, $log, CHAPTERS, PROJECTS, PARTNERS, parallaxHelper) {
        'ngInject';
        $scope.background = parallaxHelper.createAnimator(-0.3);
        this.chapters = CHAPTERS;
        this.partners = PARTNERS;
        $log.debug('partners', PARTNERS);
        this.projectsSlide = PROJECTS;
    }
    listPartners(){ return this.partners; }
    listChapters(){ return this.chapters; }

}
