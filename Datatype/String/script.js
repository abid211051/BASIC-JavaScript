let slice_str = "abidafnan";
let slice_res1 = slice_str.slice(1, 6);
let slice_res2 = slice_str.slice(-6, -1);
console.log(slice_res1, slice_res2, slice_str);

let upp_str = "abcdefg";
let upp_res = upp_str.toUpperCase();
console.log(upp_res);
console.log(upp_res.length);

let rep_str = "hi how are you!";
let rep_res1 = rep_str.replace("hi", "hlw");
console.log(rep_res1);

let trim_str = "   Learning js  ";
let trim_res1 = trim_str.trim();
console.log(trim_res1, trim_res1.length, trim_str.length);

let incl_str = "is this string present?";
console.log(incl_str.includes("in"))

let index_str = "return the position of abid";
let index_res1 = index_str.indexOf("po");
console.log(index_res1);

let spli_str = "hi return a array of, string";
let spli_arr = spli_str.split(",");
let spli_arr1 = spli_str.split(" ");
console.log(spli_arr);
console.log(spli_arr1);