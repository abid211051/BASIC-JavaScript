//O(n) answer

const input = require('prompt-sync')({ sigint: true });


var solve = function (nums) {
    let left = 0;
    let right = nums.length-1;
    let i = nums.length-1;
    let result = [];
    while(left <= right){
        let le = nums[left]**2;
        let ri = nums[right]**2;
        if(le > ri){
            result[i]=le;
            left++;
        }
        else{
            result[i]=ri;
            right--;
        }
        i--;
    }
    // console.log(result);
    return result;
};

function main() {
    const n = parseInt(input("Size: "));
    let arr = [];
    for (let i = 0; i < n; i++) {
        let v = parseInt(input());
        arr.push(v);
    }
    solve(arr);
    // console.log(arr, typeof(arr));
}

main();