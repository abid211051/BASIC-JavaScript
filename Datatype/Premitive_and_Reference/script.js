//***********main different of primitive and reference type is: 
// -> Primitive Type take individual Memory block and set their data in their block. So even if we assign a variable into another variable, they will just copy the value at that assigning time.
// -> Refernce Type take Individual Memory Block to just hold the pointer address. Their data location can be same. So if we assign one variable into another, they will totally hold the data reference. So if we change data from one variable, anther will also get changed data, as they are pointing same data location.


//**********Premitive data type. Can be string, number, boolean
//Premitive are like pass by value. They doesn't hold the full reference of each other,when assigning one variable to another. So if you assign one variable in another variable, that variable just hold the value of another variable, not whole refrence or address.

//Assume a Memory Stack. And each variable will take a individual memory block, with their value;
let a = 3;
let b = a;
console.log("After assigning into 'b':\n",b, a,"\n");
a = 5;
console.log("After changing a\n",b, a,"\n");
b = a;
console.log("After assigning new 'a' value again:\n", b, a,"\n");


//**********Reference data type. Can be Array, Object, Collection
//Refernce type are not dircetly store their value in Memory stack. They just store their refernce in Memory block with pointer.And this pointer will hold the address of the data.

//Assume a Memory stack and a Heap. If we declare two reference type variable, then both will hold Individual pointer address in Memory stack. But their data will be into the heap, which is locating by pointer address from Memory. And if we Assign one variable of reference type into another variable, then 2nd variable will also locate the same Heap location which was for 1st variable. So their will be no Individual block in Heap for the 2nd variable as it is getting refernce from 1st one. They will just take different Memory block to hold their pointer in stack.
//So As we said, 2nd variable also pointing to the same data location, so if we change any value from any variable it will effect another variable data also.

let arr = [1,2, 3,4];
let arr_copy = arr;
console.log("After assigning 'arr':\n", arr_copy, arr,"\n");

arr[4]=5;
console.log("After changing 'arr':\n", arr_copy, arr, "\n");

let obj = {name : "salmon", age: 60};
let obj_copy = obj;
console.log("After assigning 'obj':\n",obj_copy,obj,"\n");

obj["status"] = "unmarried";
delete obj_copy.age;
console.log("After changing 'obj' and 'obj_copy':\n",obj_copy,obj,"\n")

