// Arrow function body
const arrowfunction = ()=>{return "This is an Arrow function"}
console.log(arrowfunction());


// Expression function body
const expressionfunction = function(){
    return "This is Expression type function";
}
console.log(expressionfunction());


// Normal Function body
function normalfunction(){
    return "This is Normal function";
}
console.log(normalfunction());

// Parmetered function
function parmeter(val1, val2){
    if(val1 > val2){
        return `${val1} is Greater than ${val2}`;
    }
    else{
        return `${val2} is Greater than ${val1}`;
    }
}
console.log(parmeter(10, 5));

// Function inside Object
let objfunc = {
    fullname : "",
    age : 18,
    department : "",
    getdetails : function(name, year, field){
        this.fullname = name,
        this.age = year,
        this.department = field
    },
    showdetails : function(){
        return {
            Name : `${this.fullname}`,
            Age : this.age,
            Department : this.department
        }
    }
}
objfunc.getdetails("abid afnan pranto", 27, "CSE");
console.log(objfunc.showdetails());


let a = (name)=>{
    return (age)=>console.log(name,age)
};
console.log(a("abid")(2))
