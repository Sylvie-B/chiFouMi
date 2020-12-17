// get all choices
let userItem = document.getElementById('userItem').getElementsByTagName('div');

// get display game
let choiceC = document.getElementById('computerChoice');
let choiceU = document.getElementById('userChoice');

// get display info
let info = document.getElementById('info');

// get display history
let comptHist = document.getElementById('comptHist');
let userHist = document.getElementById('userHist');

// get display point
let point = document.getElementById('point');
let score = 0;

// listen buttons   // random & test & point  //  history
for(let i = 0 ; i < userItem.length ; i++){
    userItem[i].addEventListener('click', function (){
        choiceU.innerHTML = userItem[i].innerHTML;
        // userHist.innerHTML = userItem[i].innerHTML;
        randomChoice(i);
        // display point
        point.innerHTML = score.toString();
        // set history
        let histGame = document.createElement('div');


    });
}

//  listen restart


// function : randon choice computer
function randomChoice (u){
    let c = Math.round(Math.random() * (userItem.length-1));
    choiceC.innerHTML = userItem[c].innerHTML;
    // comptHist.innerHTML = userItem[c].innerHTML;
    // test
    if (c === u){
        info.innerHTML = "Match nul";
    }
    else {
        switch (c){
            case 0:
                switch (u){
                    case 1:
                        // user win (c, u, w)
                        info.innerHTML = "Vous avez gagné !!!";
                        score ++;
                        break;
                    case 2:
                        // computer win
                        info.innerHTML ="L'ordinateur a gagné !!!";
                        break;
                }
                break;
            case 1:
                switch (u){
                    case 0:
                        // computer win
                        info.innerHTML ="L'ordinateur a gagné !!!";
                        break;
                    case 2:
                        // user win
                        info.innerHTML = "Vous avez gagné !!!";
                        score ++;
                        break;
                }
                break;
            case 2:
                switch (u){
                    case 0:
                        // user win
                        info.innerHTML = "Vous avez gagné !!!";
                        score ++;
                        break;
                    case 1:
                        // computer win
                        info.innerHTML ="L'ordinateur a gagné !!!";
                        break;
                }
                break;
        }
    }
}
