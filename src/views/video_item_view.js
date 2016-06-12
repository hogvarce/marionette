import VideoSelected from './video_selected';
import {layout, collection} from './video_request';
// вью одного видео
const VideoItemView = Marionette.ItemView.extend({
  template: '#item-template',
  events: {
      'click': 'changeView'
  },
  changeView: function(){
      let inx = this.$el.index();
      let selectedView = new VideoSelected({model: new Backbone.Model(collection[inx])});
      layout.showChildView('selected', selectedView);
  }
});

export default VideoItemView;
