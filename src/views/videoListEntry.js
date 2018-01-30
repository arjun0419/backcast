var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    //add an event listener on 
    // this.model.on('change', this.render, this);
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
 