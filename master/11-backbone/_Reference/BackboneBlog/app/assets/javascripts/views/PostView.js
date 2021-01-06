var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app",

  render: function () {
    // Store all of the HTML from #PostViewTemplate in a variable called templateMarkup
    var templateMarkup = $("#PostViewTemplate").html();
    var actualTemplate = _.template( templateMarkup );
      // Figure out how you can pass all of the post's attibutes into actualTemplate function
    var compiledTemplate = actualTemplate( post.toJSON() );
    
    // Set the HTML of this.$el to be the templateMarkup
    this.$el.html( compiledTemplate );
  }

});
