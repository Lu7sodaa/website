export class DetailsController {
    constructor(project, $log){
        'ngInject';
        this.$log = $log;
        this.shouldOpenFullscreen = false;
        this.project = project;
        this.title = project.title;
        this.images = project.screenshots.map((url)=>{ return {picture:url } });
        $log.log('DetailsController.controller', project);
    }

    onFullScreenImageLoad(){
    }

    openFullscreen(img){
        this.fullscreenImgLoaded = false;
        this.fullscreenImg = img.picture;
    }

    closeFullscreen(){
        this.fullscreenImgLoaded = false;
        this.fullscreenImg = null;
    }

    shouldOpenFullscreen(){
        return this.fullscreenImg && this.fullscreenImgLoaded;
    }

    listFeedItems(){
        return this.project.feed;
    }

    listImages(){
        return this.images;
    }
}
