var VideoPlayerView = Backbone.View.extend({
  //declare pointer for el
  el: '.player',


  initialize: function () {
    //when model is changed
    this.collection.on('change', this.render, this);
    this.render();
  },


  render: function (object = this.collection.models[0]) {
    //if render is called with no arguments, default to an object 
    // if (!arguments.length) {
      
    // }
    // console.log(object);
    console.log(window.exampleVideoData)
    // this.$el.html(this.template(this.collection.models[0].attributes));
    this.$el.html(this.template(object.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
