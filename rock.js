
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice img");;
const msgcon = document.querySelector(".msg-container");
const winnerMsg = document.querySelector("#msg");
const newGame = document.querySelector(".newGame");

let userscore = 0;
let compscore = 0;

let compGenChoice = () => {
     const options = ["rock", "paper", "scissors"];
     return options[Math.floor(Math.random() * 3)];
}

let drawGame = () => {
    winnerMsg.innerText = ("Game was draw")  
    msgcon.style.backgroundColor = "brown";
}
 
let showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        winnerMsg.innerText = ("you win! your " + userChoice + " beats computers " + compChoice)
        msgcon.style.backgroundColor = "green";
        userscore++;
        userScorePara.innerText = userscore;
    }
    else {
        winnerMsg.innerText = ("you lost! Computers " + compChoice + " beats your " + userChoice)
        msgcon.style.backgroundColor = "red";
        compscore++;
        compScorePara.innerText = compscore;
    }
}

const playGame = (userChoice) => {
;
    const compChoice = compGenChoice();

        if ( userChoice === compChoice ) {
            drawGame();             
        } else  {
            let userwin = true;
            if ( userChoice === "rock" ) {
                userwin = compChoice === "paper" ? false : true;
            }
            else if ( userChoice === "paper" ) {
                userwin = compChoice === "scissors" ? false : true;
            }
            else {
                 userwin = compChoice === "rock" ? false : true;
            }
            showWinner (userwin, userChoice, compChoice);
        }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    })
});

const again = () => {
    userscore = 0;
    userScorePara.innerText = userscore
    compscore = 0;
    compScorePara.innerText = userscore
    winnerMsg.innerText = ("Play Your Move")
    msgcon.style.backgroundColor = "#181818";

}

newGame.addEventListener("click", again);







