let inp = document.getElementById('inp');
let ul = document.getElementById('ull');

let arr = [];
let i = 0;
function addtask() {
    let ll = `<li id="${i}">
    <h4>${inp.value}</h4>
    <button onclick="RemoveIt('${i}')">dD</button>
</li>`
    arr.push(ll);
    ul.innerHTML = null;
    arr.map((item, key) => {
        ul.innerHTML += item;
    })
    i++;
    inp.value = null
}

function RemoveIt(key) {
    arr.splice(key, 1, '');
    ul.innerHTML = null;
    arr.map((item, key) => {
        ul.innerHTML = item;
    })
}