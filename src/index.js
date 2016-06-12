import App from './app';
import VideoRequest from './views/video_request';

App.addRegions({
    "mainRegion": "#main"
});

App.on('start', function() {
    Backbone.history.start();
});

let videoRequest = new VideoRequest();

App.start();
