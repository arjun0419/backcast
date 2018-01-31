var VideoListEntryView = Backbone.View.extend({
  // el: '.video-list',
  // no el on purpose, we want a new div for each VLEV
  initialize: function() {
    //add an event listener on 
    // this.model.on('change', this.render, this);
  },
 
  events: {
    // 'click .media': 'handleClick'
    'click .video-list-entry-title': 'handleClick'
  },
  
  handleClick: function () {
    this.model.select();
  },
  
  render: function() {
  // debugger;
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
 