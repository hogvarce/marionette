// вью одного видео
const VideoItemView = Marionette.ItemView.extend({
  template: '#item-template',
  events: {
      'click': 'changeView'
  },
  changeView: function(){
      let desc = this.model.attributes.desc;
      let idVideo = this.model.attributes.id;
      let title = this.model.attributes.title;
      $('#selected iframe').attr('src','https://www.youtube.com/embed/'+idVideo);
      $('#selected p').text(desc);
      $('#selected h1').text(title);
  }
});

export default VideoItemView;
