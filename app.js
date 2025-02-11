let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const compChoice = () => {
    const options = ["rock","paper","scissors"];  
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
     
}


const drawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "Game was Draw, Play again. ";
    msg.style.backgroundColor ="#081b31";
}


const showWin = (userWin , userChoice , computerChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win!, Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose, ${computerChoice} beats Your ${userChoice}`; 
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    const computerChoice = compChoice();
    console.log("Computer choice = ",computerChoice);

    if (computerChoice === userChoice){
        drawGame();
    }
    else{
        let userWin=true;

        if(userChoice === "rock"){
            if (computerChoice === "paper"){
                userWin = false;
            }
            else{
                userWin=true;
            }
        }
        if(userChoice === "paper"){
            if (computerChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin=true;
            }
    }
    if(userChoice === "scissors"){
        if (computerChoice === "rock"){
            userWin = false;
        }
        else{
            userWin=true;
        }
}
    showWin(userWin , userChoice , computerChoice);
}
}



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice)
    });
});


