import { NEWS_TYPES } from '../../components/constants/news';

export class PortfolioController {
    constructor (PROJECTS, NEWS, $log, $sce, $location) {
        'ngInject';
        this.news = NEWS;
        this.$log = $log;
        this.$location = $location;
        this.projects = this.initProjects(PROJECTS);
        this.newsfeed = this.initNewsFeed();
    }
    initNewsFeed(){
        let _news = this.news;
        let all_news = this.projects.map(p=>{
            return p.newsfeed.filter((news)=>news.type != NEWS_TYPES.quote);
        });
        for(let i in all_news){
            let news = all_news[i];
            for(let j in news){
                _news.push(news[j]);
            }
        }
        return _news;
    }
    initProjects(projects){
        return projects.map((p)=>p);
    }

    listProjects(){
        return this.projects;
    }

    latestNews(){
        return this.newsfeed;
    }
}
