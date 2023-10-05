// Selection all HTML elements]
let input = document.querySelector('#taskinput');
let saveBtn = document.querySelector('#savebtn');
let output = document.querySelector('.output');
let filter = document.querySelector('.search');
let allclear = document.querySelector('.clearBtn');

// Add Event Listener
document.addEventListener('DOMContentLoaded', loadSavedTask);
saveBtn.addEventListener("click", saveNewTask);
filter.addEventListener('keyup', searchTask);
allclear.addEventListener('click', clearAllTask);

// Array for local storage data
var lsdata;

// Loading Tasks, which was already in LocalStorage
function loadSavedTask(e) {
    // e.preventDefault();
    let data = JSON.parse(localStorage.getItem('tasks'));
    if (data === null) {
        lsdata = [];
    }
    else {
        lsdata = data;
    }
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
        // console.log(lsdata);
        localStorage.setItem('tasks', JSON.stringify(lsdata)); //Note(To work with Non-string data we should use stringify() to serialize or deserialize data)
    }
    input.value = null;
}

// Delete Existing task
function deleteTask(e) {
    let doc = e.target.parentElement;
    let text = doc.children[0].textContent;
    lsdata.forEach((item, key) => {
        if (item === text) {
            lsdata.splice(key, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(lsdata));
    e.target.parentElement.remove();
}

// Clear Full List of Task
function clearAllTask(e) {
    output.innerHTML = null;
    localStorage.clear();
}

// Searching task
function searchTask(e) {
    let searchtext = e.target.value.toLowerCase();
    let allList = document.querySelectorAll('li');
    allList.forEach((item, key) => {
        if (item.children[0].textContent.toLowerCase().includes(searchtext)) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}