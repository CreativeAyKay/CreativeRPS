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
        computerMoveImg = 'https:&#47;/lh3.googleusercontent.com/drive-viewer/AITFw-zAyP0AjzSBaYcEGwL91WxHzo0pzD0pje1bwiKL2E90VeDbE6OOb3HqbzA4ry8mvkXrue6cvaeSNymtkB4DkgqnZvGckQ=s1600';
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
        computerMoveImg = 'https:&#47;/lh3.googleusercontent.com/drive-viewer/AITFw-yrFYARCSQdWKUcCWl2ckc0wruthCxiHxVEi2Wt4LpmYI5iRGLT-N2I0ka96CcmMBpOwwgC8yTOG_8flR83lFsYdIvnIg=s1600';
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
        computerMoveImg = 'https:&#47;/lh3.googleusercontent.com/drive-viewer/AITFw-zT2nnIgMNi0qcylh_vTE9fPbDIOHQnNmcv_cmQlHXCZotsLBFK2MLVG6VVkhnMACtp6FMM36z3BdSz79rGyvQrqvYUPQ=s1600';
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
        <img src="${playerMoveImg}" class="rockImg">
    </div>
    <div class="resultComputerMove">
        <p>Bot</p>
        <img src="${computerMoveImg}" class="rockImg">
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