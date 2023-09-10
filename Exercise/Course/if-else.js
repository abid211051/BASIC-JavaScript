// //Grade 
// let input = parseInt(prompt("Enter your Marks: "));

// console.log(input)
// if (input >= 0 && input <= 32) {
//     console.log("Your Grade is: F");
// } else if (input >32 && input <=44) {
//     console.log("Your Grade is: D");
// } else if (input > 44 && input <=49) {
//     console.log("Your Grade is: C");
// } else if (input > 49 && input <=54) {
//     console.log("Your Grade is: C+");
// } else if (input > 54 && input <=59) {
//     console.log("Your Grade is: B-");
// } else if (input > 59 && input <=64) {
//     console.log("Your Grade is: B");
// } else if (input > 64 && input <=69) {
//     console.log("Your Grade is: B+");
// } else if (input >69 && input <=74) {
//     console.log("Your Grade is: A-");
// } else if (input >74 && input <=79) {
//     console.log("Your Grade is: A");
// } else if (input >79 && input <=100) {
//     console.log("Your Grade is: A+");
// } else {
//     console.log("Invalid Input");
// }

// // Calculator
console.log(`Select an option:\na. Summation\nb. Subtraction\nc. Multiply\nd. Divide\ne. Modulas`);

let num1 = prompt("Enter Number 1");
let num2 = prompt("Enter Number 2");
let option = prompt("choice a option");

let ans;
if (isNaN(option) && (option === 'a' || option === 'b' || option === 'c' || option === 'd' || option === 'e')) {
    if (isNaN(num1) || isNaN(num2) || num1 ==="" || num2 ==="") {
        console.log("Invalid value given");
    }
    else {
        switch (option) {
            case "a":
                ans = Number(num1) + Number(num2);
                break;
            case "b":
                ans = num1 - num2;
                break;
            case "c":
                ans = num1 * num2;
                break;
            case "d":
                ans = num1 / num2;
                break;
            case "e":
                ans = num1 % num2;
                break;
            default:
                ans = "Something broken";
                break;
        }
        console.log(ans.toFixed(2));
    }
}
else {
    console.log("Invalid option choosen");
}
// let s = isNaN("12");
// console.log(s);
// let inp = prompt();
// let inp1 = prompt();
// console.log(Number(inp)+Number(inp1))

