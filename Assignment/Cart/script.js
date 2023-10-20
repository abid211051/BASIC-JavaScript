// Selecting required elements
let cartbtn = document.getElementById('cartbtn');
let cartdiv = document.querySelector('.cart');
let maindiv = document.querySelector('.maindiv');
let tbody = document.querySelector('.tbody');
let cartitems = document.querySelector('.cartitems');
let totalPrice = document.querySelector('.totalprice');

// cart count
let item = 0;
let totalsum = 0;

// Function Body
const togglecartwindow = (e) => {
    cartdiv.classList.toggle('onoff');
}
const deleteitem = (e)=>{
    let quant = parseInt(e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
    let ammo = parseFloat(e.target.parentElement.parentElement.children[4].textContent);
    totalsum-=ammo;
    item-=quant;
    cartitems.innerHTML = item;
    totalPrice.innerHTML = `Total Price: ${totalsum}`;
    e.target.parentElement.parentElement.remove();
}
const addtocart = (e) => {
    let imglink = e.target.parentElement.previousElementSibling.children[0].attributes[0].textContent;
    let key = e.target.parentElement.parentElement.id;
    let price = parseFloat(e.target.previousElementSibling.textContent);
    let name = e.target.previousElementSibling.previousElementSibling.textContent;
    let tablechild = tbody.children;
    item++;
    cartitems.innerHTML = item;
    totalsum+=price;
    totalPrice.innerHTML=`Total Price: ${totalsum}`;
    // console.log(tablechild[0].children)
    if (tablechild.length !== 0) {
        let bool = false;
        for (const x of tablechild) {
            if (x.id === key) {
                bool = true;
                let quantity = Number(x.children[3].textContent);
                quantity += 1;
                let ammount = Number(x.children[4].textContent);
                ammount += price;
                x.children[3].innerHTML = quantity;
                x.children[4].innerHTML = ammount;
            }
        }
        if (!bool) {
            let tr = document.createElement('tr');
            tr.setAttribute('id', key);
            tr.innerHTML = `
            <td data-label="Delete"><button onclick="deleteitem(event)">X</button></td>
                        <td data-label="Photo:"><img src="${imglink}" alt=""></td>
                        <td data-label="Product:">${name}</td>
                        <td data-label="Quantity:">1</td>
                        <td data-label="Price:">${price}</td>
            `;
            tbody.appendChild(tr);
        }
    }
    else {
        let tr = document.createElement('tr');
        tr.setAttribute('id', key);
        tr.innerHTML = `
        <td data-label="Delete"><button onclick="deleteitem(event)">X</button></td>
                        <td data-label="Photo:"><img src="${imglink}" alt=""></td>
                        <td data-label="Product:">${name}</td>
                        <td data-label="Quantity:">1</td>
                        <td data-label="Price:">${price}</td>
        `;
        tbody.appendChild(tr);
    }
}
const intiallwork = async (e) => {
    cartdiv.classList.add('onoff');
    let res = await fetch('data.json');
    let data = await res.json();
    for (const x of data) {
        let div = document.createElement('div');
        div.setAttribute('id', `${x.id}`);
        div.setAttribute('class', 'card');
        div.innerHTML =
            `<div>
                <img src="${x.img}" alt="bike image">
            </div>
            <div>
                <h4>${x.name}</h4>
                <p>${x.price} BDT</p>
                <button onclick="addtocart(event)">ADD TO CART</button>
            </div>`
        maindiv.appendChild(div);
    }
}

// Adding Eventlistener
cartbtn.addEventListener('click', togglecartwindow);
document.addEventListener('DOMContentLoaded', intiallwork);
