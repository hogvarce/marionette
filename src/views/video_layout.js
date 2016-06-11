// вью всего блока видео
const VideoLayout = Marionette.LayoutView.extend({
    template: "#layout-view-template",
    regions: {
        selected: "#selected",
        list: "#list"
    }
});

export default VideoLayout;
