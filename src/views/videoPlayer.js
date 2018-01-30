var VideoPlayerView = Backbone.View.extend({
  //declare pointer for el
  el: '.player',

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
