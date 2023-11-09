function getComputerChoice(){
    moves = ['rock', 'paper', 'scissors'];
    randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber];

}
let win = 0;
let lose = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {
    console.log(`Computer: ${computerSelection}`);
    console.log(`User: ${playerSelection}`);
    

    if (computerSelection === 'rock'){
        if (playerSelection === 'paper'){
            win += 1;
            return 'You win! Paper beats Rock'
        }
        else if (playerSelection === 'scissors'){
            lose += 1;
            return 'You lose! Rock beats Scissors'
        }
        else if (playerSelection === 'rock'){
            tie += 1;
            return 'Tie'
        }
    }
    if (computerSelection === 'paper'){
        if (playerSelection === 'scissors'){
            win += 1;
            return 'You Win! Scissors beats Paper'
        }
        else if (playerSelection === 'rock'){
            lose += 1;
            return 'You Lose! Paper beats Rock'
        }
        else if (playerSelection === 'paper'){
            tie += 1;
            return 'Tie'
        }
    }
    if (computerSelection === 'scissors'){
        if (playerSelection === 'rock'){
            win += 1;
            return 'You Win! Rock beats Scissors'
        }
        else if (playerSelection === 'paper'){
            lose += 1;
            return 'You Lose! Scissors beats paper'
        }
        else if (playerSelection === 'scissors'){
            tie += 1;
            return 'Tie'
        }
    }


  }
   




function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose: Rock Paper Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log(`Win ${win}`)
        console.log(`Lose: ${lose}`)
        console.log(`Tie: ${tie}`)
    }
        
}


game()





