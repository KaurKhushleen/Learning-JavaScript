let ROCK = "✊", PAPER = "🖐️", SCISSORS = "✌️";

const score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function updateScoreElement() {
    document.querySelector('.js-score').innerText = `Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateGameInfo() {

}
updateScoreElement();


function ComputerPick() {
    let pick = Math.random();

    if (pick < 1 / 3)
        return ROCK;
    else if (pick < 2 / 3)
        return PAPER;
    else
        return SCISSORS;
}

function getResult(userMove, compMove) {
    if (userMove == ROCK) {
        if (compMove == ROCK) {
            score.ties++;
            return 'Tie.';
        }
        else if (compMove == PAPER) {
            score.losses++;
            return 'You Lose!';
        }
        else {
            score.wins++;
            return 'You Win!';
        }
    }

    else if (userMove == PAPER) {
        if (compMove == PAPER) {
            score.ties++;
            return 'Tie.';
        }
        else if (compMove == SCISSORS) {
            score.losses++;
            return 'You Lose!';
        }
        else {
            score.wins++;
            return 'You Win!';
        }
    }

    else {
        if (compMove == SCISSORS) {
            score.ties++;
            return 'Tie.';
        }
        else if (compMove == ROCK) {
            score.losses++;
            return 'You Lose!';
        }
        else {
            score.wins++;
            return 'You Win!';
        }
    }
}

function playGame(userMove) {
    let computerMove = ComputerPick();
    let result = getResult(userMove, computerMove);
    let displayResult = `You picked ${userMove}, Computer picked ${computerMove}. Result : ${result}`;
    let displayScore = `Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    localStorage.setItem("score", JSON.stringify(score));

    //alert(displayResult + '\n' + displayScore);
    document.querySelector('.js-moves').innerText = `You picked ${userMove}, Computer picked ${computerMove}`;
    document.querySelector('.js-result').innerText = `Result : ${result}`;
    document.querySelector('.js-score').innerText = `Wins : ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}



function resetScore() {
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;

    localStorage.removeItem("score");

    document.querySelector('.js-moves').innerText = "";
    document.querySelector('.js-result').innerText = "";
    updateScoreElement();
}

let isAutoPlaying = false;
let intervalId;

function autoPlay(){

  if (!isAutoPlaying){
    intervalId = setInterval(function() {
      const playerMove = ComputerPick();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;
  }

  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

//adding keydown interactivity

document.body.addEventListener('keydown', (event) => {

  if (event.key === 'r')
    playGame(ROCK);
  else if(event.key === 'p')
    playGame(PAPER);
  else if(event.key === 's')
    playGame(SCISSORS);

})