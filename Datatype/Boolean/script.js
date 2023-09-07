// undefine, null, NaN return boolean false
// if a variable have number 0 then it is boolean false, otherwise true for every number

//undefine
let x;
console.log(x, Boolean(x));

//null
let y = null;
console.log(y, Boolean(y));

//NaN
let z = 1/"j";
console.log(z, Boolean(z));

let a = "0";
console.log(a, Boolean(a));

// undefine and ""(empty string) is different thing
let s = "";
console.log(s, Boolean(s));

let b = 0;
console.log(b, Boolean(b));

let val = true;
console.log(val, Boolean(val));

let cmp = 130 > 3;
console.log(cmp)

