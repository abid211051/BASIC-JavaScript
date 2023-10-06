// Selecting HTML elements
let input = document.querySelector('#taskinput');
let saveBtn = document.querySelector('#savebtn');
let output = document.querySelector('.output');
let filter = document.querySelector('.search');
let allclear = document.querySelector('.clearBtn');

// Adding Event Listener
document.addEventListener('DOMContentLoaded', loadSavedTask);
saveBtn.addEventListener("click", saveNewTask);
filter.addEventListener('keyup', searchTask);
allclear.addEventListener('click', clearAllTask);

// Array for local storage data
var lsdata;
var id = 0;

// Showing LocalStorage data in Initally loaded page
function loadSavedTask(e) {
    // Here we are bringing data from LS. Then checking if any data is present or not.
    // If no data is present then set "lsdata" as empty array.
    // else loading the LS data into "lsdata".[will treat as an array]
    let data = JSON.parse(localStorage.getItem('tasks'));
    if (data === null) {
        lsdata = [];
    }
    else {
        lsdata = data;
    }
    // Now iterate on every "lsdata" item and priniting data on initally loaded DOM.
    lsdata.forEach((item) => {
        let lis = document.createElement('li');
        lis.setAttribute('id', `${item.id}`);
        lis.innerHTML = `
        <span>${item.value}</span>
        <button onclick="deleteTask(event)">Delete</button>
        `;
        output.appendChild(lis);
    })
}

// Saving New task On input
function saveNewTask(e) {
    e.preventDefault();
    let inputvalue = input.value;
    let dataobj = {
        id : id,
        value: inputvalue
    }
    // Checking if input is empty or just special Charecter?
    if (inputvalue === '' || /^\W$/.test(inputvalue)) {
        alert('Please write a meaningfull task name')
    }
    else {
        let lis = document.createElement('li');
        lis.setAttribute('id', `${dataobj.id}`);
        lis.innerHTML = `
        <span>${dataobj.value}</span>
        <button onclick="deleteTask(event)">Delete</button>
        `;
        output.appendChild(lis);
        // Storing data in local storage. 
        lsdata.push(dataobj);
        localStorage.setItem('tasks', JSON.stringify(lsdata)); //Note(To work with Non-string data we should use stringify() to serialize or deserialize data)
    }
    id++;
    input.value = null;
}

// Delete Existing task
function deleteTask(e) {
    // Receving the "parentElemet" of the "delete" button. [In this case it is a '<li>']
    let doc = e.target.parentElement;
    lsdata.forEach((item, key) => {
        if (String(item.id) === doc.id) {
            lsdata.splice(key, 1);
        }
        else{
            console.log("Not matched")
        }
    })
    // Now reassign the "lsdata" in localstorage with remaining data. [Afte deletion]
    localStorage.setItem('tasks', JSON.stringify(lsdata));
    // Now remove that "Element" from dom which "delete" button was clicked
    e.target.parentElement.remove();
}

// Clear Full List of Task
function clearAllTask(e) {
    output.innerHTML = null;
    localStorage.clear();
}

// Searching task
function searchTask(e) {
    // converting serach Input value to lowercase for accurate, and easier searching.
    let searchtext = e.target.value.toLowerCase();
    let allList = document.querySelectorAll('li');
    // Now itearting on every '<li>' element and check every <span> text with searching parameter.
    // if any character or whole string of serach input is present in <span> text
    // then simply 'block' the display of those matched item, and
    // set display to 'none' for mismatched item.
    allList.forEach((item, key) => {
        if (item.children[0].textContent.toLowerCase().includes(searchtext)) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}