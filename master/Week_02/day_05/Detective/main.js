// The DOM Detective
//
// Open up girldevelopit.com in Chrome or Firefox, and open up the console (CMD-Option-I on Macs).
//
// Use jQuery to find the following parts of the page.
// You probably first want to use Inspect Element to figure out what their tag names, classes, and IDs are.

// Every image on the page
$(#"img");
$(#"img.length");
// The navigation area in the upper right
$(#"nav.navigation");
// The MailChimp sign-up form in the bottom

// The upper left-hand logo that says GDI (Hint: use CSS descendant selectors)
$("a.logo img");
$("a.logo > img");
// The logos of the media sources that featured GirlDevelopIt (lifeHacker, TED, etc., at the bottom of the page)
$(".press-logos");
$(".press-logos");

// The big heading that says "DON'T BE SHY DEVELOP IT"
$("h1");
$("h1").html();
// BONUS: all the dots in the map
$("circle"):
$("circle.length"):
