/*
create function 
randomly choose 1 2 or 3
if 1 
    return rock 
if 2 
    return paper
if 3
    return scissors

*/
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






function game() {
    for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Make Your Move").toLowerCase()
    const computerSelection = getComputerChoice()

    console.log(playRound(playerSelection, computerSelection))
    console.log("Player Wins: " + playerWins)
    console.log("Computer Wins: " + computerWins)
    
    }
}


game()





