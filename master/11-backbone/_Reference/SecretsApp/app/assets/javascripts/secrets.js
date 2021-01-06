var app = app || {};

app.router = new app.AppRouter();

$(document).ready(function () {

  // console.log( "The page has loaded" );
    // Start the Backbone router

    Backbone.history.start();

    app.secrets = new app.Secrets();
    app.secrets.fetch(); // GET url

    window.setInterval(function () {
        console.log("Should ask for new secrets");
        app.secrets.fetch();
    }, 2000);

});
