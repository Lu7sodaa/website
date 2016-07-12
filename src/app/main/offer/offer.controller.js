export class OfferController {
    constructor ($log, chapters) {
        'ngInject';
        $log.log('OfferController - resolved chapters', chapters);
        this.chapters = chapters
    }

    listChapters(){
        return this.chapters;
    }
}
