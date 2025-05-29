function dice1() {

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

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

dice1();

function dice2() {

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

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

dice2();

