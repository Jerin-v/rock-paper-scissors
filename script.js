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
/*
if ps is rock and cs is rock
    its a tie 
else if ps is rock and cs is paper
    cs wins!
else if ps is rock and cs is scissors
    ps wins!

if ps is paper and 

I wonder if there's a way to do this without hard coding the selections


*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a Tie!"
    } else  if (playerSelection === "rock" && computerSelection == "paper"){
        return "Computer Wins!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!"
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win!"
    } else  if (playerSelection === "paper" && computerSelection == "paper"){
        return "It's a Tie!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer Wins!"
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer Wins!"
    } else  if (playerSelection === "scissors" && computerSelection == "paper"){
        return "You Win!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a Tie!"
    }


}

/*
let playerSelection = prompt("Make Your Move").toLowerCase()
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))
*/


function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Make Your Move").toLowerCase()
        const computerSelection = getComputerChoice()

        console.log(playRound(playerSelection, computerSelection))
        
    }
    
}

game()


