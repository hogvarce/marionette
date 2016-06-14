import {vent} from './video_item_view';
// вью выбранного видео
const VideoSelected = Marionette.ItemView.extend({
    template : '#video-template',
    initialize: function(){
        vent.on('changeView', this.change, this);
    },
    modelEvents: {
        'change': 'render'
    },
    reRender: function(){

    },
    change: function(model){
        this.model.set({
            id: model.attributes.id,
            title: model.attributes.title,
            desc: model.attributes.desc
        });
    }
});

export default VideoSelected;
