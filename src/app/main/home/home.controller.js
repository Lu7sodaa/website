export class HomeController {
    constructor ($scope, $state, CHAPTERS, parallaxHelper) {
        'ngInject';
        $scope.background = parallaxHelper.createAnimator(-0.3);
        this.$state = $state
        this.chapters = CHAPTERS;
    }

    listChapters(){
        return this.chapters;
    }
    chapterDescription(chapter){
        return chapter.home_description ? chapter.home_description : chapter.description;
    }
    goChapter(chapter_title){
        this.$state.go('offer', {chapter: chapter_title.toLowerCase() });
    }


}
