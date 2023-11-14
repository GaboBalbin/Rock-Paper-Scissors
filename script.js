// Honestly, just use another if else statement block to know who won
// For the many if stataments, combine all the winning plays into one if statement. Use || and return who won
// Same for the losing plays



let playerSelection;
const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");

const RESULTS = document.querySelector(".results");

let win = 0;
let lose = 0;
let tie = 0;
let out = "";


function game(){
    ROCK.addEventListener('click', () => {
        playerSelection = ROCK.getAttribute('data-move');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    })
    PAPER.addEventListener('click', () => {
        playerSelection = PAPER.getAttribute('data-move');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    })
    SCISSORS.addEventListener('click', () => {
        playerSelection = SCISSORS.getAttribute('data-move');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    })
}

game();



function getComputerChoice(){
    moves = ['rock', 'paper', 'scissors'];
    randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber];

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper'){
            out = `You win! ${playerSelection} beats ${computerSelection}`
            win += 1;
        }
    else if (playerSelection === 'rock' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'scissors' || 
            playerSelection === 'scissors' && computerSelection === 'rock'){
                out = `You lose! ${computerSelection} beats ${playerSelection}`
                lose += 1;
            }
    else{
        out = "Tie Bitch"
        tie += 1;
    }
    console.log(`Win ${win}`);
    console.log(`Lose ${lose}`);
    console.log(`Tie ${tie}`)
    RESULTS.textContent = out;

    if (win === 5){
        console.log('Player Won');
        alert('You Won');
        win = 0;
        lose = 0;
        tie = 0;
    }
    else if (lose === 5){
        console.log('Computer Won');
        alert('Computer Won');
        win = 0;
        lose = 0;
        tie = 0;
    }
    
  }
   



// Everytime a move was done, game() is done
// DOM

//PlayerSelection is initialize inside a function and a button changes the value of it








