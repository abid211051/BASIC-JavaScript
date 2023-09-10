// For in for Array, string, Object iteration
let st = "Hi this is bangladesh";

for (const key in st) {
    console.log(key,"->",st[key]);
}

console.log("\nFor in for Object:");
let obj = {
    name : "Me",
    age : 10,
    dep : "cse",
    clg : "IIUC"
}
for (const key in obj) {
    console.log(obj[key]);
}
// for of doesn't work on Object, Beacuse it consider value on every iteration not key or index;
// THIS CODE WILL THROW AN ERROR
// for (const it of obj) {
//     console.log(obj[it]);
// }

console.log("\nFor of for Array:");
let arr = ["abid", "afnan", "pranto", "cse", "developer"];

for (const it of arr) {
    console.log(it);
}
console.log("\nFor in for Array:");
for (const it in arr) {
    console.log(`Index ${it}-> ${arr[it]}`);
}