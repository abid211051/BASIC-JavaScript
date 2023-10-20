// Match any word character and _ excluding special charecter
const re =  /\w+/;
const str = "this is word";
console.log("Ans of \\w: ",re.test(str));

// Match all other characters including special characters. But return false for alphabets
const re1 = /\W/;
const str1 = "thisisword"; // no other characters without alphabets. so false
console.log("Ans of \\W: ",re1.test(str1));

// Match all digit
const re2 = /\d/;
const str2 = "abn00";
console.log("Ans of \\d: ",re2.test(str2));

// Match all white space
const res = /\s/;
const strs = "abid"; // no white space, so false
console.log("Ans of \\s: ",res.test(strs));

// Assertion
// Match x only if it is preciding of y
const re3 = /x(?=y)/;
const str3 = "abidxy";
console.log("Ans of x(?=y): ",re3.test(str3));

// Match x only if it is followed by y
const re4 = /x(?!y)/;
const str4 = "abidyx";
console.log("Ans of x(?!y): ",re4.test(str4));