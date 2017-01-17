import { NEWS_TYPES } from '../../components/constants/news';

export class PortfolioController {
    constructor (PROJECTS, NEWS, $log, $state, $sce, $location) {
        'ngInject';
        $log.log('PortfolioController.constructor');
        this.news = NEWS;
        this.$log = $log;
        this.$state = $state;
        this.$location = $location;
        this.projects = this.initProjects(PROJECTS);
        this.feed = this.initFeed();
    }

    initFeed(){
        let _news = this.news;
        let all_news = this.projects.map(p=>{
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

    goToDetails(project){
        this.$state.go('app.portfolio.details', { slug: project.slug })
    }

    initProjects(projects){
        return projects.map((p)=>p);
    }

    listProjects(){
        return this.projects;
    }

    listFeedItems(){
        return this.feed;
    }
}
