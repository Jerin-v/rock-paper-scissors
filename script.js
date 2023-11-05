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
    console.log(choice)
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

