const input = require('prompt-sync')({ sigint: true });


var solve = function (fn) {
    let m = new Map();
    return function (...args) {
        let st = JSON.stringify(args);
        if (m.has(st)) {
            return m.get(st);
        }
        else{
            let ans = fn(...args);
            m.set(st, ans);
            return ans;
        }
    }
};

function main() {
    let callCount = 0;
    const memoizedFn = solve(function (a, b) {
        callCount += 1;
        return a + b;
    })
    memoizedFn(2, 3) // 5
    memoizedFn(2, 3) // 5
    console.log(callCount)
}

main();