// // class Movie
// var Movie = Backbone.Model.extend({
//   defaults: {
//     title: "N/A",
//     duration: 0,
//     director: "N/A"
//   },
//
//   initialize: function () {
//     // The keyword ` this ` refers to the current instance of the model (the one that was just created)
//
//     this.on("change", function () {
//       console.log("\tSomething changed");
//     });
//
//     this.on("change:title", function () {
//       console.log("\tThe title was changed");
//     });
//
//     this.on("change:director change:duration", function () {
//       console.log("\tThe director or duration changed");
//     });
//
//     console.log( "A movie was created" );
//   }
// });
//
// var genericMovie = new Movie();
//
// // Movie.create()
// var bestMovie = new Movie({
//   name: "Satantango",
//   duration: 532,
//   director: "Bela Tarr"
// });
//
// // Getters (Accessor Methods)
// var title = bestMovie.get("name");
// var director = bestMovie.get("director");
// var duration = bestMovie.get("duration");
//
// console.log( title, director, duration );
//
// var theGrinch = new Movie({
//   title: "The Grinch",
//   primaryColour: "Green"
// });
//
// var allGrinchAttributes = theGrinch.toJSON();
// console.log( allGrinchAttributes );
//
// var almostBestMovie = new Movie({
//   title: "Satan"
// });
//
// almostBestMovie.set("title", "Satantango");
// almostBestMovie.set({
//   duration: 532,
//   director: "Bela Tarr"
// });
//
// var allAttrs = almostBestMovie.toJSON();
// console.log( allAttrs );
//
// var m1 = new Movie();
// var m2 = new Movie({ title: "Toy Story" });
//
// console.log( m1.toJSON() );
// console.log( m2.toJSON() );

// var Movies = Backbone.Collection.extend({
//   model: Movie,
//   initialize: function () {
//   console.log("A new collection of movies was created");
//   }
// });
//
// var myMovies = new Movies();
//
// var toyStory = new Movie ({ title: "Toy Story"});
// var myCinema = new Movies( toyStory );
//
// var biggerCinema = new movies([
//   genericMovie,
//   bestMovie,
//   theGrinch
// ]);
//
// var newCinema = new Movies([
//   { title: " Jurassic Park " },
//   { title: " Jaws " },
//   { title: " I am legend " },
//   { title: " Godzilla " },
// ]);
//
// console.log( newCinema.length );
//
// newCinema.add({
//   title: "The man who knew Infinity"
// }); // Will convert this object into an instance of Movie
//
// var theBigLebowski = new Movie({
//   title: "The Big Lebowski"
// });
// newCinema.add( theBigLebowski );
//
// console.clear();
//
// newCinema.each(function () {
//   console.log("An iteration ran", movie );
// });

// var ourMixedCollection = new Movies([
//   { title: "Movie One", goodMovie: false, tags: [ "comedy" ] },
//   { title: "Movie Two", goodMovie: true, tags: [ "horror" ] },
//   { title: "Movie Three", goodMovie: false, tags: [ "action" ] },
//   { title: "Movie Four", goodMovie: false, tags: [ "action" ] },
//   { title: "Movie Five", goodMovie: false, tags: [ "comedy", "action" ] },
//   { title: "S Movie", goodMovie: true, tags: [ "history" ] },
//   { title: "T Movie", goodMovie: false, tags: [ "comedy" ] },
//   { title: "A Movie", goodMovie: true, tags: [ "documentary" ] },
//   { title: "B Movie", goodMovie: false, tags: [ "comedy" ] },
// ]);
//
// var allBadMovies = ourMixedCollection.where({
//   goodMovie: false
// });
// console.log( allBadMovies.length );
//
// var goodMovies = ourMixedCollection.remove( allBadMovies );
//
// console.log( ourMixedCollection.length );

// var movieOne = new Movie({ title: "Movie One" });
// var movieTwo = new Movie({ title: "Movie Two" });
// var movieThree = new Movie({ title: "Movie Three" });
//
// var myMovies =  new Movies();
// myMovies.add( movieOne );
// myMovies.add( movieTwo );
// myMovies.add( movieThree, { at: 0} );
//
// console.log( myMovies.pluck("title") );




// Describe what a collection of BlogPosts looks like this - Blog
  // Add a function that will be run straight away
  // Specify what type of data is stored
  // Create a couple of collections:
    // One should be empty
    // One should have a single BlogPost
    // One should have lots of blog posts
      // This should be done with empty objects
  // Add a bunch of blog posts

// var Blog = Backbone.Collection.extend({
//   model: BlogPost,
//   initialize: function () {
//     console.log( "A new blog was created" );
//   }
// });
//
// var newBlog = new Blog();
// var p1 = new BlogPost();
// var orhterBlogPost = new Blog([
//   { title: "Lorem ipsum" },
//   { title: "Lorem ipsum 2" },
// ]);
//
// otherBlog.add({ title: "LOREM IPSUM" });





// var collectionOfBlogs = new Blog([
//     { title: "Blog One ", content: " " },
//     { title: "Blog Two ", content: " One " },
//     { title: "Blog Three ", content: " Two " },
//     { title: "Blog Four ", content: " Three " },
//   ]),
// );
//
//




//  var BlogPost = Backbone.Model.extend({
//    defaults: {
//      title: "",
//      content: ""
//    },
//
//    initialize: function () {
//      console.log( "A new post was created" );
//      this.on("change", function () {
//        console.log("Something changed");
//      });
//
//      this.on("change:title", function ( blogPost ) {
//        var currentTitle = blogPost.get("title");
//        var previousTitle = blogPost.previousAttributes().title;
//        var warning = "The title changed from " + previousTitle + " to " + currentTitle;
//        console.warn( warning );
//      });
//
//      this.on("change:title change:content", function () {
//        console.log("The title or the content changed");
//      });
//    }
// });
//
// var p = new BlogPost();
// var p2 = new BlogPost();
//
// p.set({ title: "Hello World" });
// var title = p.get('title');
//
// var allAttrs = p2.toJSON();
// console.log( title, allAttrs );
//
// var bp = new BlogPost({ title: "Hello" });
// bp.set("title", "Hello World");

var Animal = Backbone.Model.extend({
  defaults: {
    stripes: 0,
    living: true,
    ecosystem: '',
    type: 'Animal'
  },

  initialize: function () {
    console.log("A new animal was born");
    this.on("change", function () {
      console.log("\tAn animal's attributes changed");
    });

    this.on("change:type", function ( animal ) {
      var currentType = animal.get("type");
      var previousType = animal.previousAttributes().type;
      var message = "\tThe type changed from " + previousType + " to " + currentType;
      console.log( message );
    });
  }
});

var a1 = new Animal();
var a2 = new Animal({ stripes: 1 });

var kangaroo = new Animal({ type: "Kangaroo" });
kangaroo.set({ type: "Giant Kangaroo" });

var Zoo = Backbone.Collection.extend( {
  model: Animal,
initialize: function () {
  console.log( "A new animal was created" );
  this.on("add", function ( newAnimal ) {
    var animalName = newAnimal.get("type");
    var msg = "We just got a new" + animalName;
    console.log( msg );
  });

  this.on("remove", function (animal) {
    console.log( animal );
  });
}
});

var animal = new Animal({
  type: "Horse"
});
gaZoo.add( animal );

animal.set("type", "Horse");

var horse = gaZoo.findWhere({ type: "Horse" });
gaZoo.remove( horse );

console.log( gaZoo.pluck("type")
);


var gaZoo = new Zoo();

gaZoo.add( kangaroo );
gaZoo.add([
  { type: "Dumbo Octopus"},
  { type: "Donkey"},
  { type: "Panda"}
]);





// A new model called BlogPost
  // Needs a console.log saying a new post was created as soon as it is created
  // Needs events for any change, change title, and change of content
  // Default values (title and content should both be strings)

  // Creating instances
  // Setting values
  // Getting values

// Add a new event to BlogPost that says
  // Anytime the title is changed
    // The title changed from "____" to "____"









// Creating a data type (blueprint)

  // var Movie = Backbone.Model.extend( ... );

// Creating an instance (an actual piece of data)

  // var m1 = new Movie();
  // var m2 = new Movie({ ... });

// Getting individual attributes

  // var someKey = m2.get("someKey");

// Getting all attributes

  // var allAttrs = m2.toJSON();

// Setting attributes

  // m1.set("key", "value");
  // m1.set({ key1: "value1", key2: "value2" });

// Setting default values

  // var Movie = Backbone.Model.extend({
  //   defaults: { ... }
  // });

// Listening for changes

  // In your initialize...
  // this.on("change", function () {});
  // this.on("change:key", function () {});
  // this.on("change:key1 change:key2", function () {});

// Creating an instance

  // var myMovies = new movies();
  // var myMovies = new Movies();
  // var myMovies = new Movies( movie );
  // var myMovies = new Movies( movieOne, movieTwo );
  // var myMovies = new Movies([
  //   { title: " " },
  //   { title: " " },
  //   { title: " " },
  // ]); // it will turn these objects into instances of the movie
