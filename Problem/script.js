const input = require('prompt-sync')({ sigint: true });


var solve = function (nums1, m, nums2, n) {
    if(n===0) return nums1;
    nums1.splice(m,n);
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b);
    // console.log(nums1)
};

function main() {
    const m = parseInt(input("Size m: "));
    const n = parseInt(input("Size n: "));
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < m+n; i++) {
        let v = parseInt(input());
        arr1.push(v);
    }
    for (let i = 0; i < n; i++) {
        let v = parseInt(input());
        arr2.push(v);
    }
    solve(arr1, m, arr2, n);

    // console.log(arr, typeof(arr));
}

main();