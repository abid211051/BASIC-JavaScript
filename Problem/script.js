const input = require('prompt-sync')({ sigint: true });


var solve = function (arr1, arr2) {
    let mymap = new Map();
    arr1.forEach((item)=>{
        mymap.set(item.id, item);
    })
    arr2.forEach((item)=>{
        if(mymap.has(item.id)){
            let ob = mymap.get(item.id);
            for (const key in item) {
               ob[key] = item[key]
            }
            mymap.set(item.id, ob);
        }
        else{
            mymap.set(item.id, item);
        }
    })
    let arr = [];
    mymap.forEach((item)=>arr.push(item));
    return arr.sort((a, b)=> a.id - b.id);
};

function main() {
    let arr1 = [
        {"id":1,"x":36,"d":26,"f":35},
        {"id":3,"c":20,"z":75}
    ];
    let arr2 = [
        {"id":2,"o":48,"z":84,"y":61}
    ];
    let ans = solve(arr1, arr2);
    console.log(ans);
}

main();