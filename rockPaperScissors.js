let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
 }

function playRound(computerChoice) {

    const playerSelection = prompt('Enter your selection: ');

    if (playerSelection.toLowerCase() == 'rock' && computerChoice == 'rock') {
        console.log('Tie!');
    } else if (playerSelection.toLowerCase() == 'rock' && computerChoice == 'paper') {
        console.log('I win! Paper beats rock!');
        computerScore += 1;
    } else if (playerSelection.toLowerCase() == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors!');
        playerScore += 1;
    } else if (playerSelection.toLowerCase() == 'paper' && computerChoice == 'rock') {
        console.log('You win!  Paper beats rock!');
        playerScore += 1;
    } else if (playerSelection.toLowerCase() == 'paper' && computerChoice == 'paper') {
        console.log('Tie!');
    } else if (playerSelection.toLowerCase() == 'paper' && computerChoice == 'scissors') {
        console.log('I win!  Scissors beat paper!');
        computerScore += 1;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerChoice == 'rock') {
        console.log('I win!  Rock beats scissors!');
        computerScore += 1;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beat paper!');
        playerScore += 1;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerChoice == 'scissors') {
        console.log('Tie!');
        
    }
    return 'My score is ' + computerScore + ' and your score is ' + playerScore;
}

function game() {
   for (let i = 0; i<5; i++) {
        console.log(playRound(getComputerChoice()));
    }

    if (playerScore > computerScore) {
        return 'You win the game!';
    } else {
        return 'I win the game!';
    }
}

console.log(game());
