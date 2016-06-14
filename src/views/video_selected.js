import {vent} from './video_item_view';
// вью выбранного видео
const VideoSelected = Marionette.ItemView.extend({
    template : '#video-template',
    initialize: function(){
        vent.on('changeView', this.change, this);
    },
    modelEvents: {
        'change': 'reRender'
    },
    change: function(model){
        this.$el.empty();
        this.model.set(model);
    },
    reRender: function(){
        this.render();
    }
});

export default VideoSelected;
