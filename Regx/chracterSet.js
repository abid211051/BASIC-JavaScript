// [] character class in JavaScript regular expressions (regex) matches any one character from the enclosed list of characters.
const str = "Hello, world!";
const re = /^Hello[,.] world/;
console.log("Ans for []: ",re.test(str)); 

const str1 = "abid1s";
const re1 = /^abid[\d][a-z]$/;
console.log("Ans for []: ",re1.test(str1)); 

// { } quantifier in JavaScript regular expressions (regex) specifies -
//  how many times the preceding character or character class must appear in the match. 
const str2 = "Hello";
const re2 = /[a-zA-Z]{4,}/; // match at least 1 or more preceding character
console.log("Ans for {}: ",re2.test(str2));

// () parentheses in JavaScript regular expressions (regex) are used to create capturing groups.
const str3 = "Hello, world!";
const re3 = /([a-zA-Z]+)(\d+)/;
console.log("Ans for (): ",re3.test(str3)); 
