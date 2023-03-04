const choices = ["rock", "paper", "scissors"];
let score = 0;
let pcScore = 0;
let playerSelection = "rock";
function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkWinner(playerSlecetion, computerSelection) {
  if (playerSlecetion == computerSelection) {
    return "tie";
  } else if (
    (playerSlecetion == "rock" && computerSelection == "scissors") ||
    (playerSlecetion == "scissors" && computerSelection == "paper") ||
    (playerSlecetion == "paper" && computerSelection == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(_playerSlecetion, computerSelection) {
  const resault = checkWinner(_playerSlecetion, computerSelection);

  if (resault == "tie") {
    return "Its a tie";
  } else if (resault == "player") {
    score++;
    return `you win ${_playerSlecetion} beats ${computerSelection}`;
  } else {
    pcScore++;
    return `you lost ${computerSelection} beats ${_playerSlecetion}`;
  }
}

function answer() {
  const computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  document.getElementById("winner").innerHTML = result;
}

function play(_playerSlecetion) {
  playerSelection = _playerSlecetion;
  answer();

  document.getElementById("userScore").innerHTML = score;
  document.getElementById("pcScore").innerHTML = pcScore;

  if (score >= 5) {
    document.getElementById("winner").innerHTML = "You won the game";
    document.getElementById(playerSelection).classList.add("won");
    disableGame()
  }
  if (pcScore >= 5) {
    document.getElementById("winner").innerHTML = "You lost the game";
    document.getElementById(playerSelection).classList.add("lost");
    disableGame()
  }
}

function disableGame() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
function reset(){
  pcScore = 0;
  score = 0;
  document.getElementById("userScore").innerHTML = score;
  document.getElementById("pcScore").innerHTML = pcScore;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  console.log('test')
  console.log(pcScore)
  console.log(score)
}