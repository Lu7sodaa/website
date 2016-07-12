export class HomeController {
    constructor ($state, CHAPTERS) {
        'ngInject';
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
