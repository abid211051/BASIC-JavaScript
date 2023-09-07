// without boolean, string, number, undefine, NaN most of the thing are considered as object type in js. even array also.

// Array is basically collection of many data in single variable, JavaScript array is dynamic type. so no need to define size, it dynamically resize array on insert and delete

//JavaScript Array data type is too powerfull. It can work like stack, queue, vector. with its push, pop, shift, unshift methods
const arr = ["BD", "USA", "RSA", "JP", "IND", "PAK"];
console.log(arr, typeof(arr),"\n");

let arr1 = ["BD", "USA", "RSA", "JP", "IND", "PAK"];
arr1.pop();
console.log("After pop :\n",arr1,"\n");

arr1.push("UK", "KSA");
console.log("After push:\n",arr1,"\n");

for(let i=0; i<7; i++){
    let val = arr1.pop();
    console.log(val);
}
console.log("\n");
// arr1.shift();
// console.log("After shift:\n",arr1,"\n");

arr1.unshift("ITA");
arr1.push("ARG");
arr1.unshift("GER");
arr1.unshift("BRA");
arr1.push("USA");
let st = "SRI";
arr1.push(st);
console.log("After Insertion:\n",arr1,"\n");

//some array methods
arr1.sort();
console.log("After sorting:\n",arr1,"\n");

let ind = arr1.lastIndexOf("ITA");
console.log("After Searching index is:\n",ind,"\n");

//**this is not too usefull, because though if we get value as string but there will be a comma in between every single string. that's why it is usefull to use map(), join()*/
let ss = arr1.toString();
console.log("Converting to string:\n",ss,"\n");

let str ="";
arr1.map((it)=>str+=it);
console.log("Using map:\n",str,"\n");

//if we want specific symbol between each string, just put any string inside join("") parenthesis
let str1 = arr1.join("");
console.log("After using JOIN:\n",str1,"\n");

//split divide the string into substring  whenever see a separator. if separator is empty string like: "" ;then all the character will consider as a single array element.And if nothing is given inside parenthesis of split then whole string will consider as just 1 array element
let sp = "hi this is BD";
let sp_arr = sp.split("");
console.log("After using split:\n",sp_arr,"\n");

let arr3 = arr.concat(arr1);
console.log("After using concat:\n",arr3,"\n");


