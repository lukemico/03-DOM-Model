// Create an array of every link on the page using document.querySelectorAll(cssSelector)
// Iterate through the array. In each iteration of the loop:
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)



// Create an array of every link on the page using document.querySelectorAll(cssSelector)


var allLinks = document.querySelectorAll
