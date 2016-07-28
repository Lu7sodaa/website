export class OfferController {
    constructor (chapters, $sce) {
        'ngInject';
        this.chapters = chapters.map(function(chapter){
            if(typeof chapter.pictogram === typeof ''){
                chapter.pictogram = $sce.trustAsHtml(chapter.pictogram);
            }
            return chapter;
        });
    }

    listChapters(){
        return this.chapters;
    }

    goToChapter(chapter){
        let id = `#${chapter.title.toLowerCase()}`;
        let scroll_top = angular.element(id).offset().top;
        angular.element('body').animate({scrollTop: scroll_top});
    }
}
