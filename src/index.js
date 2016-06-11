import YTSearch from 'youtube-api-search';

import App from './app.js';
import VideoCollectionView from './views/video_collection_view';
import VideoLayout from './views/video_layout';
import VideoSelected from './views/video_selected';

const API_KEY = 'AIzaSyB7Oa57QXJwmPTHBedbChar8_BGFG3xNLo';

//функция отправляющая запрос на youtube
const videoSearch = (id) => {
    YTSearch({key: API_KEY, term: id}, (videos) => {

        console.log(videos);

        if (!videos.length) return false;

        let collection = [];

        for (let video in videos){
            collection.push({
                id: videos[video].id.videoId,
                title: videos[video].snippet.title,
                desc: videos[video].snippet.description,
                thumb: videos[video].snippet.thumbnails.default.url,
            });
        }

        let collectionView =  new VideoCollectionView({
            collection: new Backbone.Collection(collection)
        });

        let selectedView = new VideoSelected({model: new Backbone.Model(collection[0])});


        let layout = new VideoLayout().render();

        App.mainRegion.show(layout);
        layout.showChildView('list', collectionView);
        layout.showChildView('selected', selectedView);
    });
}
// меняем хеш
const changeHash = () => {
    $(document).on('click', 'button.btn', (event)=>{
       router.navigate($('input[name="search"]').val(), {trigger: true, replace: true});
   })
};

App.addRegions({
    "mainRegion": "#main"
});

App.on('start', function() {
  Backbone.history.start();
});

let MyController = Marionette.Controller.extend({
  home: (id) => {
      videoSearch(id);
      changeHash();
  }
});

let myController = new MyController();

let MyRouter = Marionette.AppRouter.extend({});

let router = new MyRouter();
router.processAppRoutes(myController, {
  ":id": "home"
});

App.start();

changeHash();
