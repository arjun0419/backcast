var VideoListView = Backbone.View.extend({
  // points dom to class list in app's html, line:12
  el: '.list',

  initialize: function() {

    // this.model.on('sync', this.render, this);
    this.collection.on('sync', this.render, this);
  },
 
  render: function() {
    // changes to html template to el
    this.$el.html(this.template());
    // clears children pointer
    this.$el.find('.video-list').children().detach();
    //instantiate videoListEntryView n times
    for (var i = 0; i < this.collection.length; i++) {
      //VLEV is instantiated here so that it will be children of VLV
      var videoListEntryView = new VideoListEntryView({model: this.collection.models[i]});
      videoListEntryView.render();
      //find the class video list in el and append VLEV div
      this.$el.find('.video-list').append(videoListEntryView.$el); 
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
