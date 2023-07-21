let playerMove;
let computerMove;
let result;
let randomNumber;
let playerMoveImg;
let computerMoveImg;

function pickComputerMove() {
    randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
        computerMoveImg = '<a><img src="https://i.ibb.co/56VbHbG/Rock.png" alt="Rock" class="rockImg"></a>';
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
        computerMoveImg = '<a><img src="https://i.ibb.co/4Z7QYPs/Paper.png" alt="Paper" class="paperImg"></a></button>';
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
        computerMoveImg = '<a><img src="https://i.ibb.co/xCMfxpf/Scissors.png" alt="Scissors" class="scissorsImg"></a>';
    }

}

function playGame() {
    if(playerMove === 'Rock') {
        if(computerMove === 'Rock') {
            result = 'Tie';
        } else if(computerMove === 'Paper') {
            result = 'You Lose';
        } else if(computerMove === 'Scissors') {
            result = 'You Win';
        }
    } else if(playerMove === 'Paper') {
        if(computerMove === 'Paper') {
            result = 'Tie';
        } else if(computerMove === 'Scissors') {
            result = 'You Lose';
        } else if(computerMove === 'Rock') {
            result = 'You Win';
        }
    } else if(playerMove === 'Scissors') {
        if(computerMove === 'Rock') {
            result = 'You Lose';
        } else if(computerMove === 'Paper') {
            result = 'You Win';
        } else if(computerMove === 'Scissors') {
            result = 'Tie';
        }
    }
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
function calculateScore() {
    if(result === 'You Win') {
        score.wins++;
    } else if(result === 'You Lose') {
        score.losses++;
    } else if(result === 'Tie') {
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));
}

let resultElement;
let scoreElement;
let playerMoveElement;
function resultText() {
        resultElement = document.querySelector('.resultText');
        resultElement.innerHTML = `<div class="resultHeader">
    <p>${result}</p>
</div>
<div class="resultFooter">  
    <div class="resultPlayerMove">
        <p>You</p>
        ${playerMoveImg}
    </div>
    <div class="resultComputerMove">
        <p>Bot</p>
        ${computerMoveImg}
    </div>
</div>`;
        scoreElement = document.querySelector('.scoreText');
        scoreElement.innerHTML = `<div class="scoreTextWins">
        <p>Wins</p>
        <p>${score.wins}</p>
    </div>
    <hr class="line"> 
    <div class="scoreTextLosses">
        <p>Losses</p>
        <p>${score.losses}</p>
    </div>
    <hr class="line">
    <div class="scoreTextTies">
        <p>Ties</p>
        <p>${score.ties}</p>
    </div>`;
        playerMoveElement = document.querySelector('.playerMoveElement');
}   

function resetScore() {
    localStorage.removeItem('score');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    scoreElement.innerHTML = `<div class="scoreTextWins">
    <p>Wins</p>
    <p>${score.wins}</p>
</div>
<hr class="line"> 
<div class="scoreTextLosses">
    <p>Losses</p>
    <p>${score.losses}</p>
</div>
<hr class="line">
<div class="scoreTextTies">
    <p>Ties</p>
    <p>${score.ties}</p>
</div>`;
    resultElement.innerHTML = '';
}