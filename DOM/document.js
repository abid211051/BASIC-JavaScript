// Denoting full HTML document <doctype> to <body>
var val = document;

// Full Html Document Nodelist or Nodearray
val = document.querySelectorAll("*");
// Return HTML head tag
val = document.head;
// Return HTML head tag
val = document.body;
// Return Full Client URL
val = document.URL;
// Return UTF-8
val = document.characterSet;
// Return type of content, like html/text
val = document.contentType;

// Return a array of all link in HTMl file (Not actual array)
val= document.links;
// Converting to JS array. (Though for-of loop will work)
val = Array.from(document.links);
// // Iteraing on each element of val
// val.forEach(element => {
//     console.log(element)
// });

// Attribute accesing from an element
// Return classes name as a string from link[0]
val = document.links[0].className;
// Return array of a classes name from link[0]
val = document.links[0].classList;
// Return href value of link[2]
val = document.links[2].href;
// Remove Text decoration from link[1]
val = document.links[1].style.textDecoration = "none"

console.log(val);