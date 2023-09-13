// Random function generate random number greater then equal 0.00 and less than 1.0
// to get random number in between given range, use this:
let maxvalue = 20;
let minvalue = 5;
let number = Math.floor(Math.random()*(maxvalue - minvalue + 1) + minvalue);
console.log(number);


// Date object
let today = new Date();
let hour = today.getHours(); // will return current time hour
let miniute = today.getMinutes(); // will return current time miniute
let second = today.getSeconds();
// Day, Month START count from 0, like array.
// NOTE: Monday is the first day here. so monday->1, tuesday->2 ...
let dayarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let montharr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();
console.log(`${dayarr[day]} ${montharr[month]} ${year} | ${hour}:${miniute}:${second}`);