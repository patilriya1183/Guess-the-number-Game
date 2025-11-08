let inputNumEL = document.getElementById("inputNum");

let msgEl = document.getElementById("msg");

let randomNumEl = Math.floor( Math.random() * 100);

let btnResetEl = document.getElementById("btnReset");

let count = 0;

function checkNum(){

    let userGuess = Number(inputNumEL.value);

    if( count < 5 ){

        count = count + 1;

        if( userGuess === randomNumEl ){

            msgEl.textContent = `Congratulations!! You got it right. ( Guess Count : ${count})`;
            msgEl.style.color = "white";
            msgEl.style.background = "green";
            btnResetEl.textContent = "Play Again";

        }

        else if ( userGuess < randomNumEl ){

            msgEl.textContent = `Too Low! Try Again. ( Guess Count : ${count})`;
            msgEl.style.color = "white";
            msgEl.style.background = "blue";

            inputNumEL.value = "";

        }

        else {

            msgEl.textContent = `Too High! Try Again. ( Guess Count : ${count})`;
            msgEl.style.color = "white";
            msgEl.style.background = "blue";

            inputNumEL.value = "";
        }

    }

    else{

        msgEl.textContent = `Game Over! The correct number was ${randomNumEl}.`;
        msgEl.style.color = "white";
        msgEl.style.background = "#dc0e0e";

    }

}

function btnReset(){

    randomNumEl = Math.floor(Math.random() * 100);

    count = 0;

    inputNumEL.value = "";

    msgEl.textContent = "Game Reset! Start guessing...";
    msgEl.style.color = "white";
    msgEl.style.background = "green";
    btnResetEl.textContent = "Reset";
}