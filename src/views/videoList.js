var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.model.on('sync', this.render, this);
  },
 
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
