// get buttons
let stone = document.getElementById('stone');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

//  get the different choices
let choice = document.getElementById('userItem').getElementsByTagName('div');

// get display game
let choiceC = document.getElementById('computerChoice');
choiceC.style.fontSize = '10vw';
let choiceU = document.getElementById('userChoice');
choiceU.style.fontSize = '10vw';

// get display history

// get display point
let point = document.getElementById('point');

// listen buttons   // random // test // info
stone.addEventListener('click', function (){
    choiceU.innerHTML = stone.innerHTML;
    randomChoice(stone);
});

paper.addEventListener('click', function (){
    choiceU.innerHTML = paper.innerHTML;
    randomChoice(paper);
});

scissors.addEventListener('click', function (){
    choiceU.innerHTML = paper.innerHTML;
    randomChoice(scissors);
})

// function : randon choice computer
function randomChoice (item){
    let x = Math.round(Math.random() * (choice.length-1));
    choiceC.innerHTML = choice[x].innerHTML;
    // test
    if (x === 0)
        switch (item){
            case stone :
                // match null
                break;
            case paper :
                //
        }

}


