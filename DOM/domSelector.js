// Single element selector
let second = document.getElementById('ul-list-2');
let third = document.getElementById('ul-list-3');
// changing content of list2 with innerHtML. (Note: innerHTML change content by considering HTML tag also)
second.innerHTML = '<h4>this is h4 content for list 2</h4>'
// Inner text change text inside tag. (Note: Consider '' value as a line of string)
third.innerText = '<h4>this is h4 content for list 3</h4>'

// query selector (Note : Return only first matched element. "SAME AS CSS SELECTOR")
let order = document.querySelector('.ol-list');
order.querySelector('li:nth-child(2)').style.backgroundColor = "red";



// Multi element selector
// className return array of all matched class 
// (Note: Not a proper array. to iterate through for-each loop, we need to convert proper JS array)
let list = document.getElementsByClassName('p-div');
list[0].style.border = '1px solid black';

// querySelectorAll return array of all matched element 
// Note: For each ".p-div" class "p" tag will counted from 1.
let allp = document.querySelectorAll('.p-div p:nth-child(even)');

allp.forEach(function(item){
    item.innerHTML='<h4> converted to h4 text</h4>'
})
console.log(allp)