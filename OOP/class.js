// Class is a template or blueprint for the object
// We need to declare maltiple object for multiple user;

// 
let obj1 = {
    fullname : "",
    age : 20,
    data : function(name, year){
        this.fullname = name;
        this.age = year;
        return {name: this.fullname, age : this.age}
    }
}
console.log("JS Object Output:")
console.log(obj1.data("abid", 21));
console.log(obj1.data("afnan", 10));
console.log(obj1.fullname,"\n"); // The previous value "abid" and 21 is overwritten by "afnan" and 10.
// So if we want different data in same property and want to preserve each data we need multiple object Like:
// obj1, obj2  with containing same property or method. This is time consumming and make code big.
// To make this simple we can use "Class".


// By using a Class we can define property and method, same as JS object. But one main benefit is
// we can create multiple object from that single class, and each object can have 
// separate data using same property and method. So here we have to write less code
// and no data overwritten is happening as each object is creating his own copy of class.

// Instance and Encapsulation
class Person {
    //private property
    #salary;
    // Constructor to initialize variable or data
    constructor(name, year, salary) {
        this.fullname = name;
        this.age = year;
        this.#salary = salary;
    }
    // Class method
    getdata(){
        return {
            name: this.fullname,
            age: this.age,
            salary : this.#salary,
        }
    }
}
// Inheritance
// Inheritance means getting other class property and method with his own class property
class Cricketer extends Person {
    #total_run;
    constructor(name, year, salary, run){
        // Super() is used to call Base class constructor 
        super(name, year, salary);
        this.#total_run = run;
    }
    // polymorphisom and method overridding
    getdata(){
        // By this super.method() we can call Base class methods
        const ss = super.getdata();
        return{
            ...ss,
            run : this.#total_run
        }
    }
}
let per1 = new Person("pranto", 23, 50000);
console.log("Person class Output:");
console.log(per1.getdata());
console.log(per1.fullname);

console.log("Cricketer class Output:");
let cric1 = new Cricketer("Naim Sheik", 25, 100000, 80);
console.log(cric1.getdata());
