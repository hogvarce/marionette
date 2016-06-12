import YTSearch from 'youtube-api-search';
import App from '../app.js';
import VideoCollectionView from './video_collection_view';
import VideoLayout from './video_layout';
import VideoSelected from './video_selected';
// вью одного видео
const API_KEY = 'AIzaSyB7Oa57QXJwmPTHBedbChar8_BGFG3xNLo';

const VideoRequest = Marionette.ItemView.extend({
  el: '#VideoRequest',
  hash: '',
  initialize: function(){
      this.hash = $.trim(window.location.hash.substring(1));
      if ( this.hash != "") {
          this.videoRequest('', this.hash);
      }
  },
  events: {
      'submit': 'videoRequest'
  },
  videoRequest: function(e, hash){
      if(e) e.preventDefault();
      let request = (!hash) ? this.$el.find('input[name="search"]').val(): this.hash;
      let router =  new Marionette.AppRouter({});
      router.navigate(request, {trigger: true, replace: true});
      YTSearch({key: API_KEY, term: request}, (videos) => {

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
});

export default VideoRequest;