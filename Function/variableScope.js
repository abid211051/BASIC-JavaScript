// Variable are sensitive part of our code. So we have to be carefull when decalring or
// reassigning value on it.
// "var" is the most modifiable keyword. So it can causes data redundancy.
// So it is prefareble to use "let" and "const" to declare variable.
// "var" type variable can redeclare from anywhere in the code.
// "let" type variable can't be declare again on same name, but we can assign new value in the same variable any time.
// "const" type variable is constant. We can't redeclare or reassign value in same varible.


// Global variable
// This global variable are accessible from any where in the code.
var a = 10;
let b = 15;
const c = 20;
console.log("Global Scope: ", a, b, c);

// Function Scope
// This is like a separate block in code. Here we can access Global variable data, also can redeclare Global variable inside function block.
// NOTE: Redeclaring a variable inside function block with same name as like Global scope, will not effect on the global variable data
function func(){
    var a = 20;
    let b = 10;
    const c = 5;
    console.log("Function Scope: ", a, b, c);
}
func();
console.log("Global Scope: ", a, b, c);

// if-else and loop Scope
// If block work same like function block for "let" and "const" type variable. But it work different on "var" type variable.
// "var" variable will change Global variable data also, if we modifie it inside "if" block.
// That's why it is good to use "let" and "const"
if(1){
    var a = 30;
    let b = 40;
    const c = 50;
    console.log("If Scope: ",a, b, c);
}
console.log("Global Scope: ", a, b, c);

// For loop Scope
// Same like "if" block. "let" and "const" will remain unchanged for Global scope.
// But "var" will change in Global scope also
for(var a = 0; a < 5; a++){
    console.log("Loop Scope: ", a);
}
console.log("Global Scope: ", a, b, c);

