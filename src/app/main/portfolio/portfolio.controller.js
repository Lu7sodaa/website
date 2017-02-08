export class PortfolioController {
    constructor (PROJECTS, NEWS, feedService, $log, $state, $sce, $location) {
        'ngInject';
        this.news = NEWS;
        this.$log = $log;
        this.$state = $state;
        this.$location = $location;
        this.projects = this.initProjects(PROJECTS);
        this.feed = feedService.getFeed();
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
