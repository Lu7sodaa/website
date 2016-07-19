export class OfferController {
    constructor (chapters) {
        'ngInject';
        this.chapters = chapters
    }

    listChapters(){
        return this.chapters;
    }
}
