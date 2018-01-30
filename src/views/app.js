var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //pass in the sample videos data
    this.videos = new Videos(window.exampleVideoData);
   
    //render the view to the DOM
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //render child views
    var videoPlayer = new VideoPlayerView({collection: this.videos});
    videoPlayer.forEach(this.render, this);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
