// get all buttons
let userItem = document.getElementById('userItem').getElementsByTagName('div');

// get display game
let choiceC = document.getElementById('computerChoice');
choiceC.style.fontSize = '10vw';
let choiceU = document.getElementById('userChoice');
choiceU.style.fontSize = '10vw';

// get display history

// get display point
let point = document.getElementById('point');

// listen buttons   // random // test // info
for(let i = 0 ; i < userItem.length ; i++){
    userItem[i].addEventListener('click', function (){
        choiceU.innerHTML = userItem[i].innerHTML;
        randomChoice(i);
    });

}

// function : randon choice computer
function randomChoice (u){
    let c = Math.round(Math.random() * (userItem.length-1));
    choiceC.innerHTML = userItem[c].innerHTML;
    // test
    if (c === u){
        // match null
    }
    else {
        switch (c){
            case 0:
                switch (u){
                    case 1:
                        // user win
                        winner(who);
                        break;
                    case 2:
                        // computer win
                        break;
                }
                break;
            case 1:
                switch (u){
                    case 0:
                        // computer win
                        break;
                    case 2:
                        // user win
                        break;
                }
                break;
            case 2:
                switch (u){
                    case 0:
                        // user win
                        break;
                    case 1:
                        // computer win
                        break;
                }
                break;
        }
    }
}

function winner(who){
    
}
