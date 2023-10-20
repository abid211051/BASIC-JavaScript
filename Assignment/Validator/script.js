// Selecting DOM Elements
let btn_div = document.querySelector('.btn-div');
let inp_div = document.querySelector('.inputDiv');
let alert_div = document.querySelector('.alert');

class Option {
    constructor(id, optionName, text) {
        this.id = id;
        this.optionName = optionName;
        this.text = text;
    }
}

class UI {
    static createOption(option) {
        let btn = document.createElement('button');
        btn.setAttribute('class', 'option');
        btn.setAttribute('name', option.optionName);
        btn.setAttribute('title', option.text);
        btn.setAttribute('onclick', "inputBox(event)");
        btn.innerHTML = `Validate ${option.text}`;
        btn_div.appendChild(btn);
    }
    static showInputDiv(target) {
        btn_div.classList.add('btnDivHide');
        inp_div.classList.add('inputDivShow');
        inp_div.innerHTML = `
        <button class="back" onclick="goBack(event)">Go Back</button>
        <p>Enter ${target.title}<sup style="color: red;">*</sup></p>
            <form action="" class="inpform" onsubmit="getInput(event)">
                <input type="text" placeholder="${target.title}" name="${target.name}">
                <button type="submit" class="inpBtn">Check ${target.title}</button>
            </form>
        `
    }
    static showAlert(message, bool, child){
        alert_div.style.opacity = 1;
        alert_div.innerHTML = `<p>${message}</p>`
        if(bool){
            alert_div.style.borderBottom = '4px solid green';
            child.style.border = '2px solid green';
        }
        else{
            alert_div.style.borderBottom = '4px solid red';
            child.style.border = '2px solid red';
        }
        setTimeout(()=>{
            alert_div.style.opacity = 0;
            child.style.border = '1px solid gray';
        }, 2500)
    }
}
// Phone:- /^(?:\+88|88)?(01[3-9]\d{8})$/
// Email:- /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
// Postal:- /^\d{4}$/

class RegxController {
    static checkValidation(val, valName, child) {
        if (val !== "") {
            if (valName === "phone") {
                if (/^(?:\+88|88)?01[3-9]\d{8}$/.test(val)) {
                    UI.showAlert('Given Number is a Valid Phone Number',true, child);
                }
                else{
                    UI.showAlert('Not a Valid Phone Number',false, child);
                }
            }
            else if (valName === "email") {
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
                    UI.showAlert('Given Email is a Valid Eamil Address',true, child);
                }
                else{
                    UI.showAlert('Not a Valid Eamil Address',false, child);
                }
            }
            else if (valName === "postcode") {
                if (/^\d{4}$/.test(val)) {
                    UI.showAlert('Given Code is a Valid Postal Code pattern',true, child);
                }
                else{
                    UI.showAlert('Not a Valid Postal Code',false, child);
                }
            }
        }
        else {
            UI.showAlert('No value is given',false, child);
        }
    }
}

const displayElement = async (e) => {
    alert_div.style.opacity = 0;
    let res = await fetch('data.json');
    let data = await res.json();
    data.forEach((item, index) => {
        let option = new Option(index, item.name, item.text)
        UI.createOption(option);
    })
}
const inputBox = (e) => {
    UI.showInputDiv(e.target);
}
const getInput = (e) => {
    e.preventDefault();
    let child = e.target.children[0];
    let value = e.target.children[0].value;
    let name = e.target.children[0].name;
    RegxController.checkValidation(value, name, child);
}
const goBack = (e)=>{
    inp_div.classList.remove('inputDivShow');
    btn_div.classList.remove('btnDivHide');
}

// Initial Event Listener
document.addEventListener('DOMContentLoaded', displayElement);
