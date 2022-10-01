
const choices =["rock" , "paper" , "scissors"];
let score = 0;
function getComputerChoice(){
    const choice = choices[Math.floor(Math.random()* choices.length)];
    return choice;
}
function checkWinner(playerSlecetion, computerSelection){
    if(playerSlecetion == computerSelection){
        return "tie";
    }
    else if(
        (playerSlecetion == "rock" && computerSelection == "scissors") ||
        (playerSlecetion == "scissors" && computerSelection == "paper") ||
        (playerSlecetion == "paper" && computerSelection == "rock") 
    ){
        return "player"
        
    }
    else{
        return "computer"
    }
}

function playRound(playerSlecetion, computerSelection){
    const resault = checkWinner(playerSlecetion , computerSelection);
    if(resault == "tie"){
        return "Its a tie"
    }
    else if(resault == "player"){
        return `you win ${playerSlecetion} beats ${computerSelection}`
    }
    else{
        return `you lost ${computerSelection} beats ${playerSlecetion}`
    }
}
const playerSelection = prompt("Enter the hand you wish to play (Please use lower case letters ex : rock , paper , scissors) ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection , computerSelection))

