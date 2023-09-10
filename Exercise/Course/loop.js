const input = parseInt(prompt("Enter your number: "));

let sum =0;
let ans = "";
for(let i=1; i<=input; i++){
    sum+=(i*i);
    ans+=`${i*i} ${i==input?'=':'+ '}`;
}
console.log(ans,sum);
