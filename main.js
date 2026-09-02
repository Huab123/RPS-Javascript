// Set for the ease of writing in this project
let r = "rock"
let p = "paper"
let s = "scissors"


function output(computer, human, result) {
    return `Computer chose  ${computer} , You chose ${human} 
            \n Which means you ${result}` 
}

// Choose computer's choice 
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return r
    }
    else if (num == 1) {
        return p
    }
    else {
        return s
    }
}

// Prompt human choice on web
function getHumanChoice() {
    while (true) {
        try {
            let humanChoice = prompt("Rock, Paper, Scissors? ")
            humanChoice = humanChoice.toLowerCase().trim();
            if (humanChoice === '0' || humanChoice === r) {
                return r
            }
            else if (humanChoice === '1' || humanChoice === p) {
                return p
            }
            else if (humanChoice === '2' || humanChoice === s) {
                return s
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    console.log(computerChoice, humanChoice)
    
    switch (computerChoice === r) {
        case (humanChoice === r):
            return output(computerChoice, humanChoice, "tie!")
        case (humanChoice === p):
            return output(computerChoice, humanChoice, "won!")
        case (humanChoice === s):
            return output(computerChoice, humanChoice, "lost!")
    }
    
    switch (computerChoice === p) {
        case (humanChoice === r):
            return output(computerChoice, humanChoice, "lost!")
        case (humanChoice === p):
            return output(computerChoice, humanChoice, "tie!")
        case (humanChoice === s):
            return output(computerChoice, humanChoice, "won!")
    }

    switch (computerChoice === s) {
        case (humanChoice === r):
            return output(computerChoice, humanChoice, "won!")
        case (humanChoice === p):
            return output(computerChoice, humanChoice, "lost!")
        case (humanChoice === s):
            return output(computerChoice, humanChoice, "tie!")
    } 
}

let result = playRound()
alert(result)