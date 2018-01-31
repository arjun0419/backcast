var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // renders page before instantiating 
    this.samples = window.fakeVideoData || window.exampleVideoData;
    this.videos = new Videos(this.samples);
    this.render();
    //initialize VideoListView
    var videoListView = new VideoListView({collection: this.videos});
    videoListView.render();
    //initialize search view
    var searchView = new SearchView();
    searchView.render();
    //initialize VideoListEntryView and pass in the collection
    var videoPlayerView = new VideoPlayerView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
