// app.js

// Select DOM elements
const mosquito = document.getElementById('mosquito');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const startButton = document.getElementById('start-game');
const pauseButton = document.getElementById('pause-game');
const resumeButton = document.getElementById('resume-game');
const gameArea = document.getElementById('game-area');

// Game variables
let score = 0;
let timeLeft = 30;
let gameInterval;
let mosquitoMoveInterval;
let gamePaused = false;

// Function to move mosquito to a random position
function moveMosquito() {
    const x = Math.random() * (gameArea.clientWidth - mosquito.clientWidth);
    const y = Math.random() * (gameArea.clientHeight - mosquito.clientHeight);
    mosquito.style.left = `${x}px`;
    mosquito.style.top = `${y}px`;
}

// Function to start the game
function startGame() {
    resetGame();
    gamePaused = false;
    resumeButton.disabled = true; // Disable the resume button initially
    mosquito.style.display = 'block';
    gameInterval = setInterval(updateGame, 1000);
    mosquitoMoveInterval = setInterval(moveMosquito, 800); // Move mosquito every 800ms
}

// Function to pause the game
function pauseGame() {
    clearInterval(gameInterval);
    clearInterval(mosquitoMoveInterval);
    gamePaused = true;
    resumeButton.disabled = false; // Enable the resume button when paused
}

// Function to resume the game
function resumeGame() {
    if (gamePaused) {
        gameInterval = setInterval(updateGame, 1000);
        mosquitoMoveInterval = setInterval(moveMosquito, 800);
        gamePaused = false;
        resumeButton.disabled = true; // Disable the resume button after resuming
    }
}

// Function to update the game (time and end conditions)
function updateGame() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
    } else {
        endGame();
    }
}

// Function to end the game
function endGame() {
    clearInterval(gameInterval);
    clearInterval(mosquitoMoveInterval);
    mosquito.style.display = 'none';
    resumeButton.disabled = true; // Disable the resume button when the game ends
    alert(`Game Over! Your score is ${score}.`);
}

// Function to reset the game
function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
}

// Event listener for clicking the mosquito
mosquito.addEventListener('click', () => {
    if (!gamePaused) {
        score++;
        scoreDisplay.textContent = score;
        moveMosquito(); // Move mosquito immediately after it's clicked
    }
});

// Event listeners for game controls
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);