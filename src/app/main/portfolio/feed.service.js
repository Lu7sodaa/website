import { NEWS_TYPES, NEWS } from '../../components/constants/news';
import { PROJECTS } from '../../components/constants/projects';
import * as _ from 'underscore';

export class FeedService {

    getFeed(){
        let _news = _.clone(NEWS);
        let all_news = PROJECTS.map(p=>{
            return p.feed.filter((news)=>news.type != NEWS_TYPES.quote);
        });
        for(let i in all_news){
            let news = all_news[i];
            for(let j in news){
                _news.push(news[j]);
            }
        }
        return _news;
    }
}

FeedService.$inject = ['PROJECTS', 'NEWS', '$log'];
