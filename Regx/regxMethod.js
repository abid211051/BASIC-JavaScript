// i -> case insensetive
// g -> global [match all]
// w -> all charcter 

const re = /myexpression./;
// Printing regular expression string
console.log("Regular expression: ",re.source,"\n")

const re1 = /hello/;
let str = "hello! this is javascript session hello";
// exec() search Regular expression pattern in a string and return array if match otherwise null
// It will return first match only.
let ans = re1.exec(str);
console.log("exec method: ",ans,"\n")

const re2 = /testing/;
let str1 = "I am testing a word";
// test() return true if pattern matched in string, otherwise false
let ans1 = re2.test(str1);
console.log("Test method: ",ans1,"\n");

const re3 = /searching/;
let str2 = "this is searching() strategy in regular expression";
// search() return the index number of first match, otherwise -1.
// NOTE: Here we use serach() on string not by regular expression
let ans2 = str2.search(re3);
console.log("Search method: ",ans2,"\n");

const re4 = /replacing/;
let str3 = "Now we are replacing word";
// replace() return new string by changing the word if regular expression is matched.
// Othewise return the previous string without changing 
let ans3 = str3.replace(re4, "going to replace the");
console.log("Replace method: ",ans3,"\n")
