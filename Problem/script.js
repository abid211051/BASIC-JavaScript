const input = require('prompt-sync')({ sigint: true });


var solve = function (arr, fn) {
    let filteredArr = [];
    for(let i =0;i<arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

function main() {
    let arr = [1, 2, 3, 4];
    solve(arr, 5)
}

main();