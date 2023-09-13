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
class Person {
    constructor(name, year) {
        this.fullname = name;
        this.age = year;
    }
    getdata(){
        return {
            name: this.fullname,
            age: this.age
        }
    }
}
let per1 = new Person("pranto", 23);
let per2 = new Person("Robiul", 11);
console.log("Class objects Output:");
console.log(per1.getdata());
console.log(per2.getdata());
console.log(per1.fullname);
console.log(per2.age);