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

export function FeedDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    // replace: true,
    scope: {
        feedItems: '=',
        feedTitle:'@'
    },
    templateUrl: 'app/components/feed/feed.html',
    controller: FeedController,
    controllerAs: 'feed',
    bindToController: true
  };
  return directive;
}

class FeedController {
    constructor ($log, $scope) {
        'ngInject';
        this.$log = $log;
        this.initFeed(this.feedItems);
        $scope.$watch('feed.feedItems', (items)=>{
            this.initFeed(items);
        });
    }
    initFeed(items){
        const _init = (news)=>(news.date = new Date(Date.parse(news.date)), news);
        const _sort = (newsA, newsB)=>newsB.date.getTime()-newsA.date.getTime()
        this._feedItems = items.map(_init).sort(_sort);
    }

    listFeedItems(){
        return this._feedItems;
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
