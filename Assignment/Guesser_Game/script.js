// Dom elements
let startBtn = document.querySelector('.startbtn');
let inpDiv = document.querySelector('.inp');
let alertDiv = document.querySelector('.alert');
let chance = document.querySelector('.gameDiv h4');
let comment = document.querySelector('.gameDiv p');

// Global variables
let correct_ans;
let count = 3;

class UI {
    static generateInputBox() {
        Logic.generateRandomNumber();
        startBtn.style.display = 'none';
        comment.style.display = 'block';
        inpDiv.innerHTML = `
        <form action="" onsubmit="takeInput(event)">
                    <input type="text" placeholder="Put the number" name="num">
                    <button type="submit" class="submitbtn">Gauss</button>
                </form>
         <button class="restartbtn" onclick="restart(event)">Restart</button>
        `
    }
    static alertMessage(message) {
        alertDiv.style.opacity = 1;
        alertDiv.innerHTML = `<p>Hint: ${message}</p>`
        setTimeout(() => {
            alertDiv.style.opacity = 0;
        }, 2500)
    }
    static winLoseMessage(message, child) {
        alertDiv.style.opacity = 1;
        comment.style.display = 'none';
        alertDiv.innerHTML = `<p>${message}</p>`
        child[0].disabled = true;
        child[1].disabled = true;
    }
    static restartGame(child) {
        alertDiv.style.opacity = 0;
        comment.style.display = 'block';
        Logic.generateRandomNumber();
        count = 3;
        chance.innerHTML = `Chance: ${count}`;
        child[0].disabled = false;
        child[1].disabled = false;
    }
}
class Logic {
    static generateRandomNumber() {
        let minvalue = 1;
        let maxvalue = 10;
        correct_ans = Math.floor(Math.random() * (maxvalue - minvalue + 1) + minvalue);
    }
    static testUserInput(val, child) {
        count--;
        chance.innerHTML = `Chance: ${count}`;
        if (parseInt(val) === correct_ans) {
            UI.winLoseMessage('You Win', child);
        }
        else if (parseInt(val) > correct_ans) {
            if (count <= 0) {
                UI.winLoseMessage('You Lose!', child);
            }
            else {
                UI.alertMessage('Correct answer is smaller!');
            }
        }
        else if (parseInt(val) < correct_ans) {
            if (count <= 0) {
                UI.winLoseMessage('You Lose!', child);
            }
            else {
                UI.alertMessage('Correct answer is greater!');
            }
        }
    }
}
const startGame = (e) => {
    UI.generateInputBox();
}
const takeInput = (e) => {
    e.preventDefault();
    let child = e.target.children;
    let inputValue = e.target.num.value;
    if (inputValue !== '' && /^\d+$/.test(inputValue)) {
        Logic.testUserInput(inputValue, child);
    }
    else {
        UI.alertMessage('Please Enter a Number');
    }
}

const restart = (e) => {
    let child = e.target.previousElementSibling.children;
    UI.restartGame(child);
}
startBtn.addEventListener('click', startGame);