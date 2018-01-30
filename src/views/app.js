var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //pass in the sample videos data
    // this.videos = new Videos(window.exampleVideoData);
    // renders page before instantiating 
    this.render();
    // this.videos = new Videos();

    //initialize VideoListView
    var videoListView = new VideoListView();
    videoListView.render();
    //initialize VideoListEntryView and pass in the collection
    var videoPlayerView = new VideoPlayerView();
    videoPlayerView.render();
    //initialize search view
    var searchView = new SearchView();
    searchView.render();

    
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
