let arr =[1,2,3,4,5,6,7];

for(let i=0; i<arr.length; i++){
    console.log(`Index ${i}-> ${arr[i]}`);
}


console.log("\nForEach Loop: ");
// NOTE: foreach, map methods callback function body must be top of them.
const printValue = (value, index)=>{
    value+=2;
    console.log(`Index ${index}-> ${value}`)
}
arr.forEach(printValue);

console.log("\nMap Loop: ");
//Map method return a new array
const mapvalue = (item, i)=>{
    item*=item;
    return {item, i};
}
let ans = arr.map(mapvalue);
console.log(ans);
