// You need a function to:

// // Ask for information from the API
// // Display the information returned from the API
// var BASE_SPACE_URL = "http://api.open-notify.org/astros.json";

// // You need to wait until the page has completed loading before doing either of those things
// // Asking for information...
//
// // What url? "http://api.open-notify.org/astros.json"
// // What method? "GET"
// // What dataType?
// // What parameters? (If any)
// // Displaying Information...

// // Use debugger here!
// // Create elements
// // Put them on the page
// // Or manipulate existing elements

// // var latitude = 37.8267;
// // var longitude = -122.4233;

// // var url = BASE_SPACE_URL + "/" + latitude + "," + longitude;

var BASE_SPACE_URL = "http://api.open-notify.org/astros.json";

var displaySpace = function ( number ) {
  $.ajax({
    url: BASE_SPACE_URL,
    method: "GET",
    dataType: "JSON",
    data: {
        "message": "success",
        "number": NUMBER_OF_PEOPLE_IN_SPACE,
        "people": [
          {"name": NAME, "craft": SPACECRAFT_NAME},
          ...
        ];
      }).done( data );
};

$.getJSON('http://api.open-notify.org/astros.json', function(data) {
  console.log(data['number'])
});

// getCurrentWeather();

// var latitude = -33.8698544;
// var longitude = 151.2062719;
//
// getCurrentWeather( latitude, longitude );

// navigator.geolocation.getCurrentPosition(function ( data ) {
//   console.log( data );
// });

// var displayWeather = function ( info ) {
//   var temp = info.currently.temperature;
//   var humidity = info.currently.humidity;
//
//   $(".temperature").text( temp );
//   $(".humidity").text( humidity );
// };
//
// var getCurrentWeather = function ( lat, long ) {
//   $.ajax({
//     url: url + lat + "," + long,
//     method: "GET",
//     dataType: "JSONP",
//     data: {
//       units: "auto"
//     }
//   }).done( displayWeather );
// };
//
// // getCurrentWeather();
//
// var latitude = -33.8698544;
// var longitude = 151.2062719;
//
// getCurrentWeather( latitude, longitude );
//
// // navigator.geolocation.getCurrentPosition(function ( data ) {
// //   console.log( data );
// // });



// You need a function to:

// // Ask for information from the API
// var BASE_SPACE_URL = "http://api.open-notify.org/astros.json";
//
// // Display the information returned from the API
// // You need to wait until the page has completed loading before doing either of those things
// // Asking for information...
//
// // What url?
// // What method?
// // What dataType?
// // What parameters? (If any)
// // Displaying Information...
//
// // Use debugger here!
// // Create elements
// // Put them on the page
// // Or manipulate existing elements
//
// // $.ajax({
// //   url: "http://api.open-notify.org/astros.json",
// //   method: "get",
// //   dataType:
// // }).done (function (data) {
// //   console.log( data ['number']);
// // });
// //
// // $.ajax({
// //   url: "http://api.open-notify.org/astros.json",
// //   method: "GET",
// //   dataType: "JSONP"
// // }).done(function (data) {
// //   console.log( data );
// // });
//
// $.getJSON('http://api.open-notify.org/astros.json', function(data) {
//   console.log(data['number'])
// });






// var BASE_WEATHER_URL = "https://api.darksky.net/forecast/";
// var API_KEY = "8563ae7484b88beb694ab0dbc16e3a07";
//
// var latitude = 37.8267;
// var longitude = -122.4233;
//
// var url = BASE_WEATHER_URL + API_KEY + "/" + latitude + "," + longitude;
//
// var displayWeather = function ( info ) {
//   var temp = info.currently.temperature;
//   var humidity = info.currently.humidity;
//
//   $(".temperature").text( temp );
//   $(".humidity").text( humidity );
// };
//
// var getCurrentWeather = function ( lat, long ) {
//   $.ajax({
//     url: url + lat + "," + long,
//     method: "GET",
//     dataType: "JSONP",
//     data: {
//       units: "auto"
//     }
//   }).done( displayWeather );
// };
//
// // getCurrentWeather();
//
// var latitude = -33.8698544;
// var longitude = 151.2062719;
//
// getCurrentWeather( latitude, longitude );

// navigator.geolocation.getCurrentPosition(function ( data ) {
//   console.log( data );
// });

// For Homework

// $.ajax({
//   url:
//   method:
//   dataType:
// }).done(function (data) {
//   console.log( data );
// });
//
