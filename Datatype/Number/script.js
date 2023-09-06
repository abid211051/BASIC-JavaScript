const input = require('prompt-sync')({sigint: true});

let nu = 10;
console.log(nu.toString(2));

var pr = 12345678;
let co = pr.toPrecision(6);
console.log(co, typeof(co));

let fi = 1256.345;
let va = fi.toFixed(2);
console.log(va, typeof(va));

let paf = "23.3323";
let anf = parseFloat(paf);
console.log(anf, typeof(anf));

let pai = "23.3323";
let ani = parseInt(pai);
console.log(ani, typeof(ani));

// is nan assume a string as a number if all character in string is number.
let nan1 = "123";
console.log(isNaN(nan1));
let nan2 = 21.34;
console.log(isNaN(nan2));
let nan3 = "12d";
console.log(isNaN(nan3));

let x = -25/0;
console.log(isFinite(x)); //infinite