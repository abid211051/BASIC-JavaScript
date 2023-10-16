let arr = [1, 2, 3, 4,];
function arrmulti(my){
    my.forEach((item)=>item*3);
    return my;
}

let ans = arrmulti(arr);
console.log(ans)