import { NEWS_TYPES } from '../constants/news';

const MONTHS = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre'
];

export function NewsfeedDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    scope: {
        feed: '=',
        feedTitle:'@'
    },
    templateUrl: 'app/components/newsfeed/newsfeed.html',
    controller: NewsfeedController,
    controllerAs: 'newsfeed',
    bindToController: true
  };
  return directive;
}

class NewsfeedController {
    constructor ($log) {
        'ngInject';
        this.$log = $log;
        // $log.log('this', this, 'feed = ', this.feed);
        this.initFeed();
    }
    initFeed(){
        const _init = (news)=>(news.date = new Date(Date.parse(news.date)), news);
        const _sort = (newsA, newsB)=>newsB.date.getTime()-newsA.date.getTime()
        this._feed = this.feed.map(_init);
        this.$log.log('feed = ', this.feed);
        this._feed = this.feed.sort(_sort);
    }

    listNewsItems(){
        return this._feed;
    }

    itemIcon(item){
        let icon = 'fa-';
        switch (item.type) {
            case NEWS_TYPES.event:
                icon += 'slideshare';
                break;
            case NEWS_TYPES.quote:
                icon += 'quote-left';
                break;
            default:
                icon += 'newspaper-o';
                break;
        }
        return icon;
    }

    itemDetailsText(item){
        let text = '';
        switch (item.type) {
            case NEWS_TYPES.event:
                text = 'Voir la présentation';
                break;
            case NEWS_TYPES.quote:
                text += 'Voir la citation';
                break;
            default:
                text += 'Lire l\'article';
                break;
        }
        return text;
    }

    itemDate(item){
        const date = item.date;
        const day = date.getDate();
        const month = MONTHS[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
}
