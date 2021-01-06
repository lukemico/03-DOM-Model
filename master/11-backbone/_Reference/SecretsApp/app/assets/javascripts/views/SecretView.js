var app = app || {};

// Create a new list item
// Set the text to be the content of the model that was provided
// Prepend it to #secrets

app.SecretView = Backbone.View.extend({
  tagName: "li",

  render: function () {
    var context = this.model.get("context");
    this.$el.html( context );
    this.$el.prependTo( "#secrets" );
    // console.log("A SecretView should be rendered");
  }
});
