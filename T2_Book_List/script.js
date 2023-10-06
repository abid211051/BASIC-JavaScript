// Calling required HTML element
let form = document.querySelector('.listForm');
let outputTable = document.querySelector('.table');
let alertmessage = document.querySelector('.alert');

// Adding Event Listener
form.addEventListener('submit', newBookList);
document.addEventListener('DOMContentLoaded', localStorageData);

// "lsdata" is for keeping data of localstorage. "id" is to set unique id for every <div>.
var lsdata;
var id = 0;

// Declaring Book Model Class
class Model {
    constructor(title, author, isbn) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Controller or Logic Class
class Controller {
    // Logical method creating for new Book in DOM.
    // in "newBook" method we are creating new book on form submit.
    // We are setting unique "id" for every book <div>. [Id is comming from book.id, and incrementing after each form submit].
    // Here every "lsdata" array element will also getting a unique id in object.
    // Then saving that "lsdata" array in localstorage.
    static newBook(book) {
        let div = document.createElement('div');
        div.setAttribute('id', `${book.id}`);
        div.innerHTML =
            `<div>${book.title}</div>
            <div>${book.author}</div>
            <div style="display: flex; justify-content:space-between;">
            ${book.isbn}
            <button onclick=deleteBook(event)>X</button>
            </div>`
        outputTable.appendChild(div);
        lsdata.push(book);
        localStorage.setItem('books', JSON.stringify(lsdata));
        id++;
    }

    // Logical method for deleting Book.
    // first We are deleting the whole <div> of the clicked <button>.
    // Then we are also deleted the data of that <div>, from "lsdata" array.
    // We are trying to match "lsdata" item.id with parent <div> id.
    // if match found delete that data from "lsdata" array also.
    // Then store the reduced array again in LocalStorage
    static deletion(target) {
        target.parentElement.parentElement.remove();
        lsdata.forEach((item, key)=>{
            if(String(item.id) === target.parentElement.parentElement.id){
                lsdata.splice(key, 1);
            }
            else{
                console.log("no matched")
            }
        })
        localStorage.setItem('books', JSON.stringify(lsdata));
    }

    // Logical method for Alert Message
    // Here we are just toggeling the opacity of the alert <div> to show up or hide.
    // After 2s changing the opacity to 0 for hide the <div> again.
    static showAlert(message) {
        alertmessage.style.opacity = 1;
        alertmessage.children[0].textContent = message;
        setTimeout(() => {
            alertmessage.style.opacity = 0;
        }, 2000)
    }

    // Logical method for assigning data to DOM from LS on page render.
    // First we are assigning "data" of LS to "lsdata" array.
    // Then itterating on every "lsdata" element and creating new <div> for every data.
    static addFromLS(data) {
        lsdata = data;
        lsdata.forEach((item, key) => {
            let div = document.createElement('div');
            div.setAttribute('id', `${item.id}`);
            div.innerHTML =
                `<div>${item.title}</div>
                <div>${item.author}</div>
                <div style="display: flex; justify-content:space-between;">
                ${item.isbn}
                <button onclick=deleteBook(event)>X</button>
                </div>`
            outputTable.appendChild(div);
        })
    }
}

// Adding New Books Function
function newBookList(e) {
    // First we are checking if user putted valid information or not.
    // if information is valid, then create a "book" object with those data by calling "Model" class.
    // And Call "newBook" method of "Controller" class with "book" object parameter.
    // NOTE: We are calling "newBook" as "Controller.newBook()", without creating a instance of Controller class. This is Because we set "newBook" as a "static" function.
    // Same goes for calling "showAlert" method.
    e.preventDefault();
    let title = e.target.title.value;
    let author = e.target.author.value;
    let isbn = e.target.isbn.value;
    if (title === '' || author === '' || isbn === '' || /^\W*$/.test(title) || /^\W*$/.test(author) || /^\W*$/.test(isbn)) {
        Controller.showAlert('Please Provide Valid Information');
    }
    else {
        let book = new Model(title, author, isbn);
        Controller.newBook(book);
        Controller.showAlert('Books Added Successfully');
    }
}
// Deleting Books Function
function deleteBook(e) {
    // First we are ensuring if user really want to delete Book by "confirm" alert.
    // if yes,then calling "deletion" method from "Controller" class.
    let target = e.target;
    if (confirm("Are you Sure?")) {
        Controller.deletion(target);
        Controller.showAlert('Book was deleted Successfully');
    }
    else {
        Controller.showAlert('Could not Delete Book :(');
    }
}
// Loading from Local Storage
function localStorageData(e) {
    // On DOM load we are getting data from LocalStorage and saving it to data variable.
    // if no data is present in LS, then data will be null. And we are simplly set lsdata as empty array.
    // if any data is present, then passing the data array to "addFromLS" method of the "Controller" class.
    let data = JSON.parse(localStorage.getItem('books'));
    if (data === null) {
        lsdata = [];
    }
    else {
        Controller.addFromLS(data);
    }
}