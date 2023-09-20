var val = document.querySelector('.ol-list');
// printing all the 'li' children inside 'ol'
console.log(val.children);

var val1 = document.querySelector('.p-div');
// priniting all the childnode of div. NOTE:(childnode consider newline as a node also "Text")
console.log(val1.childNodes);

var val2 = document.querySelector('ul');
// chaining children to get all 'a' tag inside 'li2'
val2 = val2.children[1].children;
console.log(val2)

var val3 = document.querySelector('.p-div');
// lastchild, firstchild consider newline also as a child, 
// But lastElementChild,firstElementChild only consider html element as a child
console.log(val3.lastChild);
console.log(val3.lastElementChild);
console.log(val3.firstElementChild);

var val4 = document.querySelectorAll('li');
// Getting parent node of 'li[5]'
console.log(val4[5].parentNode);
// chaining parents of li. Ex: li[1] -> ul -> body
console.log(val4[1].parentElement.parentElement);

var val5 = document.querySelector('p:nth-child(2)');
// getting next and previous element of 2nd 'p'
console.log(val5.nextElementSibling);
console.log(val5.previousElementSibling);

