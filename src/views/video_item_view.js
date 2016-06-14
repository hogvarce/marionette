import VideoSelected from './video_selected';
import {layout, collection} from './video_request';
const vent = _.extend({}, Backbone.Events);
// вью одного видео
const VideoItemView = Marionette.ItemView.extend({
  template: '#item-template',
  events: {
      'click': 'changeView'
  },
  changeView: function(){
      vent.trigger('changeView', this.model);
  }
});
export {vent};
export default VideoItemView;
