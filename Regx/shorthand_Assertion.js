// Match any word character and _ excluding special charecter
const re =  /\w+/;
const str = "this is word";
console.log(re.test(str));

// Match all other characters including special characters. But return false for alphabets
const re1 = /\W/;
const str1 = "thisisword"; // no other characters without alphabets. so false
console.log(re1.test(str1));

// Match all digit
const re2 = /\d/;
const str2 = "abn00";
console.log(re2.test(str2));

// Match all white space
const res = /\s/;
const strs = "abid"; // no white space, so false
console.log(res.test(strs));

// Assertion
// Match x only if it is preciding of y
const re3 = /x(?=y)/;
const str3 = "abidxy";
console.log(re3.test(str3));

// Match x only if it is not preciding of y
const re4 = /x(?!y)/;
const str4 = "abidyx";
console.log(re4.test(str4));