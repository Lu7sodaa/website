export class OfferController {
    constructor (chapters, $sce, $location) {
        'ngInject';
        this.$location = $location;
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
        let hash = chapter.title.toLowerCase();
        let id = `#${hash}`;
        let scroll_top = angular.element(id).offset().top - 45;
        this.$location.hash(hash);
        angular.element('html,body').animate({scrollTop: scroll_top});
    }
}
