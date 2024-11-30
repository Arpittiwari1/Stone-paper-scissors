let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "paper", "scissors"];
   const randidx =  Math.floor(Math.random() *3);
     return options[randidx];
}
 const drawGame = () => {
        msg.innerHTML = "Game was Draw.Play Again."
        msg.style.backgroundColor = "#081b31"
 };
 const showWinner = (userWin ,userChoice,compChoice) => {
if(userWin){
    userScore++;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green"
    
}
else{
    compScore++;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red"
    
}
 }

const playGame = (userChoice) => {

const compChoice = genCompChoice();


if (userChoice === compChoice){
    drawGame();
} 
else {
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice==="paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
}
else{
   userWin =  compChoice==="rock" ? false : true;
}
showWinner(userWin ,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) =>{
        const userChoice = choice.getAttribute("id");
playGame(userChoice);
    });
});//hehehhhhhhhhhhhhhhhhhhh
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const messageElement = document.getElementById('msg');

 let userScore1 = 0;
 let compScore1 = 0;

function updateScores() {
    userScoreElement.textContent = userScore1;
    compScoreElement.textContent = compScore1;
    messageElement.textContent = "Play your move";
}
function resetGame() {
    userScore1 = 0;
    compScore1 = 0;
    updateScores();
}
document.getElementById('reset').addEventListener('click', resetGame);
updateScores();