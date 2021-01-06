var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  initialize: function () {
    console.log("A new view was created");
  },

  render: function () {
    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();
  }
});







// The target element is #app

// On initialization we want a console log of new view

// On render
  // Get the HTML out of the template we just created (save it in a variable called templateMarkup)
  // Set the element with the ID of app's HTML to be templateMarkup

// var appView = new app.AppView();
// appView.render();
