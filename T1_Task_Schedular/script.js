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
        output.innerHTML += `<li class="task">
        <span>${item}</span>
        <button onclick="deleteTask(event)">Delete</button>
    </li>`
    })
}

// Saving New task On input
function saveNewTask(e) {
    e.preventDefault();
    let inputvalue = input.value;
    // Checking if input is empty or just special Charecter?
    if (inputvalue === '' || /^\W$/.test(inputvalue)) {
        alert('Please write a meaningfull task name')
    }
    else {
        let li = `<li class="task">
        <span>${inputvalue}</span>
        <button onclick="deleteTask(event)">Delete</button>
    </li>`;
        output.innerHTML += li;
        // Storing data in local storage. 
        lsdata.push(inputvalue);
        localStorage.setItem('tasks', JSON.stringify(lsdata)); //Note(To work with Non-string data we should use stringify() to serialize or deserialize data)
    }
    input.value = null;
}

// Delete Existing task
function deleteTask(e) {
    // Receving the "parentElemet" of the "delete" button. [In this case it is a '<li>']
    let doc = e.target.parentElement;
    // Then getting the text from <span> tag which is children[0].
    let text = doc.children[0].textContent;
    // Now iterate on every "lsdata" item, and try to match "text" of the delete button.
    // if match is found then delete that "text" from that position in array.
    lsdata.forEach((item, key) => {
        if (item === text) {
            lsdata.splice(key, 1);
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