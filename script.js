
function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3)
    console.log(choice) //debug
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }

}



let playerWins = 0;
let computerWins = 0;
let winner = ""


// Plays one round between computer



function game() {
    
    
    const computerSelection = getComputerChoice()

    console.log(playRound(playerSelection, computerSelection))
    console.log("Player Wins: " + playerWins)
    console.log("Computer Wins: " + computerWins)

    
    
    
}



window.onload = function() {

    function playRound (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a Tie"
        } 
        if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" &&
        computerSelection === "rock") {
            playerWins++
            return "Player Wins!"
        } 
        
        
        if (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "paper" &&
        playerSelection === "rock") {
            computerWins++
            return "Computer Wins!"
        } 
        
    
    }


const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playerSelection = "rock"
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playerSelection = "paper"
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerSelection = "scissors"
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
})
}


