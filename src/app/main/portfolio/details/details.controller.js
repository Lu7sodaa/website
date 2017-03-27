export class DetailsController {
    constructor(project, $log){
        'ngInject';
        this.$log = $log;
        this.shouldOpenFullscreen = false;
        this.project = project;
        this.title = project.title;
        this.images = project.screenshots.map((url)=>{ return {picture:url } });
    }

    nextImage(){
        this.currentImageIndex += 1;
        if(this.currentImageIndex > this.images.length-1){
            this.currentImageIndex = 0;
        }
    }

    previousImage(){
        this.currentImageIndex -= 1;
        if(this.currentImageIndex < 0){
            this.currentImageIndex = this.images.length-1;
        }

    }

    fullscreenImage(){
        return this.images[this.currentImageIndex].picture;
    }

    openFullscreen(img, index){
        this.currentImageIndex = index;
        this.fullscreenImgLoaded = false;
        this.isFullscreenOpened = true;
    }

    closeFullscreen(){
        this.fullscreenImgLoaded = false;
        this.isFullscreenOpened = false;
    }

    shouldOpenFullscreen(){
        return this.fullscreenImg && this.fullscreenImgLoaded;
    }

    hasFeedItems(){
        return this.listFeedItems().length > 0;
    }

    listFeedItems(){
        return this.project.feed;
    }

    listImages(){
        return this.images;
    }
}
