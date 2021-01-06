// var User = Backbone.Model.extend({
//   defaults: {
//     password: "chicken",
//     email: "",
//     username: "Marky Mark"
//   },
// initialize: function () {
//   console.log("Someone signed up");
// }
// });
//
// var bill = new User({ id: 1, name: "Bill Murray" });
// var groucho = new User({ id: 2, name: "Groucho Marx" });
// var harpo = new User({ id: 3, name: "Harpo Marx" });
// var zeppo = new User({ id: 4, name: "Zeppo Marx" });
//
// var Users = Backbone.Collection.extend({
//   model: User,
//   initialize: function () {
//   // The keyword ' this ' refers to the collection that was just created
//     this.on("add", function () {
//     console.log( "A collection of users was created");
//
// });
//   //
//   this.on("remove", function () {
//   console.log( "A user deleted their account");
// });
//
// var allUsers = new Users([
//   bill,
//   groucho,
//   harpo,
//   zeppo
// ]);
//
// allUsers.add({
//   name: "Jacques Cousteau"
// });
//
// // Find Chad,
// allUsers.add({
//   name: "Chad Kroeger"
// }, { at: [0] });
//
// // Then I want to remove him from the collection of users
// allUsers.remove( chad );
// console.log( allUsers.pluck("chad") );
//
//
//
// // vollection.get( ID ) - user.find_by(id: params[id:] )
//
// var firstUser = allUsers.get( 1 );
// var thirdUserName = allUsers.get( 3 ).get( "name" );
// var harpo = allusers.findWhere({ name: "Harpo Marx" });
//
// console.log( firstUser, thirdUserName );
// console.log( harpo.toJSON() );
