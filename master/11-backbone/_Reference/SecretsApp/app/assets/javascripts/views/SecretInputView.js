var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",

  events: {
    'click button' : 'createSecret'
  },

  createSecret: function () {
    var userInput = $("textarea").val();
    var secret = new app.Secret({
      context: userInput
    });
    secret.save();

    app.secrets.add( secret );

  $("textarea").val('').focus();
},

  render: function () {
    var templateMarkup = $("#SecretInputViewTemplate").html();
    this.$el.html( templateMarkup );
  }
});
