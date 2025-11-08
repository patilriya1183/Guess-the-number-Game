let inputNumEL = document.getElementById("inputNum");

let msgEl = document.getElementById("msg");

let btnCheckEl = document.getElementById("btnCheck");

let btnResetEl = document.getElementById("btnReset");

let randomNumEl = Math.ceil( Math.random() * 100);

console.log( randomNumEl );

let count = 0;


function validInput(){

    msgEl.textContent = "Please enter the valid input!!";
    msgEl.style.color = "#dc0e0e";
}

function checkNum(){

    let userGuess = Number(inputNumEL.value);

    if( count < 5 ){

        if( userGuess < randomNumEl ){
            
            if(inputNumEL.value === ""){

                validInput();
            }

            else{

                count = count + 1;

                msgEl.textContent = `Too Low! Try Again. ( Guess Count : ${count})`;
                msgEl.style.color = "#dc0e0e";

                inputNumEL.value = "";
            }
        }

        else if( userGuess > randomNumEl ){

            if(inputNumEL.value === ""){

                validInput();
            }

            else{

                count = count + 1;

                msgEl.textContent = `Too High! Try Again. ( Guess Count : ${count})`;
                msgEl.style.color = "#dc0e0e";

                inputNumEL.value = "";
            }
        }

        else{

            if( userGuess === randomNumEl ){

                msgEl.textContent = `Congratulations!! You got it right. ( Guess Count : ${count})`;
                msgEl.style.color = "green";

                btnCheckEl.style.display = "none";
                btnResetEl.style.display = "inline";
                btnResetEl.textContent = "Play Again";

            }

            else{

                validInput();
            }

        }

    }

    else{

        msgEl.textContent = `GAME OVER!!! The correct number was ${randomNumEl}.`;
        msgEl.style.color = "#dc0e0e";

        
        btnCheckEl.style.display = "none";
        btnResetEl.style.display = "inline";
        btnResetEl.textContent = "Check";
    }

}

function btnReset(){

    randomNumEl = Math.ceil(Math.random() * 100);

    count = 0;

    inputNumEL.value = "";

    msgEl.textContent = "Game Reset! Start guessing...";
    msgEl.style.color = "green";
    btnCheckEl.style.display = "inline";
    btnResetEl.style.display = "none";
}