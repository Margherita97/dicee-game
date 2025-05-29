let randomNumber1 = Math.floor(Math.random() * 6) + 1;

function random1() {

if (randomNumber1 === 1) {
    document.querySelector(".img1").src = "./images/dice1.png";
} else if (randomNumber1 === 2) {
    document.querySelector(".img1").src = "./images/dice2.png";
} else if (randomNumber1 === 3) {
    document.querySelector(".img1").src = "./images/dice3.png";
} else if (randomNumber1 === 4) {
    document.querySelector(".img1").src = "./images/dice4.png";
} else if (randomNumber1 === 5) {
    document.querySelector(".img1").src = "./images/dice5.png";
} else {
    document.querySelector(".img1").src = "./images/dice6.png";
}

}

const dice1 = random1();


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function random2() {

if (randomNumber2 === 1) {
    document.querySelector(".img2").src = "./images/dice1.png";
} else if (randomNumber2 === 2) {
    document.querySelector(".img2").src = "./images/dice2.png";
} else if (randomNumber2 === 3) {
    document.querySelector(".img2").src = "./images/dice3.png";
} else if (randomNumber2 === 4) {
    document.querySelector(".img2").src = "./images/dice4.png";
} else if (randomNumber2 === 5) {
    document.querySelector(".img2").src = "./images/dice5.png";
} else {
    document.querySelector(".img2").src = "./images/dice6.png";
}

}

const dice2 = random2();


function changeMessage() {

    if (randomNumber1 > randomNumber2) {
        document.getElementById("message").innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.getElementById("message").innerHTML = "Player 2 Wins!";
    } else {
        document.getElementById("message").innerHTML = "Draw!";
    }
}

changeMessage();