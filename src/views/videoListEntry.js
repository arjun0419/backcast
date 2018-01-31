var VideoListEntryView = Backbone.View.extend({
  // el: '.video-list',
  // no el on purpose, we want a new div for each VLEV
  // url: this.attributes.snippet.thumbnails.default.url,

  initialize: function() {
    
    // videoTitle:  ,
    // videoDetail:  
    

    //add an event listener on 
    // this.model.on('change', this.render, this);
  },

 
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
 