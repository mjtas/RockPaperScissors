
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.gap = '32px';

const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '32px';

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.onclick = () => playRound('rock', getComputerChoice());

buttonContainer.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.onclick = () => playRound('paper', getComputerChoice());

buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.onclick = () => playRound('scissors', getComputerChoice());

buttonContainer.appendChild(scissorsButton);

container.appendChild(buttonContainer);

const scoreContainer = document.createElement('div');
scoreContainer.style.display = 'flex';
scoreContainer.style.flexDirection = 'column';
scoreContainer.style.justifyContent = 'center';

const outcomeText = document.createElement('p');
outcomeText.style.textAlign = 'center';

scoreContainer.appendChild(outcomeText);

const scoreText = document.createElement('p');
scoreText.style.textAlign = 'center';

scoreContainer.appendChild(scoreText);

container.appendChild(scoreContainer);


function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
 }

function playRound(playerSelection, computerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == 'rock' && computerChoice == 'rock') {
            outcomeText.textContent = 'Tie!';
        } else if (playerSelection == 'rock' && computerChoice == 'paper') {
            outcomeText.textContent = 'I win! Paper beats rock!';
            computerScore += 1;
        } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
            outcomeText.textContent = 'You win! Rock beats scissors!';
            playerScore += 1;
        } else if (playerSelection == 'paper' && computerChoice == 'rock') {
            outcomeText.textContent = 'You win!  Paper beats rock!';
            playerScore += 1;
        } else if (playerSelection == 'paper' && computerChoice == 'paper') {
            outcomeText.textContent = 'Tie!';
        } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
            outcomeText.textContent = 'I win!  Scissors beat paper!';
            computerScore += 1;
        } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
            outcomeText.textContent = 'I win!  Rock beats scissors!';
            computerScore += 1;
        } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
            outcomeText.textContent = 'You win! Scissors beat paper!';
            playerScore += 1;
        } else if (playerSelection == 'scissors' && computerChoice == 'scissors') {
            outcomeText.textContent = 'Tie!';
        }
        return scoreText.textContent = 'My score is ' + computerScore + ' and your score is ' + playerScore;
    } else if (playerScore == 5) {
        return outcomeText.textContent = 'You win the game!';
    } else if (computerScore == 5) {
        return outcomeText.textContent = 'I win the game!';
    }
}

