// get buttons
let stone = document.getElementById('stone');

let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

// get display game
let choiceC = document.getElementById('computerChoice');
let choiceU = document.getElementById('userChoice');
choiceU.style.fontSize = '10vw';


// get display history

// get display point
let point = document.getElementById('point');

// listen buttons
stone.addEventListener('click', function (){
    choiceU.innerHTML = stone.innerHTML;
    randomChoice();
});

// function : randon choice computer
let choice = document.getElementById('choice').getElementsByTagName('div');

function randomChoice (){
    let x = Math.round(Math.random() * (choice.length-1));
}

// test

