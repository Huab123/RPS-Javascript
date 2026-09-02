// Set for the ease of writing in this project
let r = "rock"
let p = "paper"
let s = "scissors"
let score = [0, 0]


function output(computer, human, score ,result) {
    return `Computer chose  ${computer} , You chose ${human} 
            \n Which means you ${result} 
            \n The score is now Computer ${score[0]}:${score[1]} Human`
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

// Play 1 round of rps
function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    console.log(computerChoice, humanChoice)
    
    // Check for tie
    if (computerChoice === humanChoice) {
        alert(output(computerChoice, humanChoice, score, "tie!"))
        return 2
    }
    
    // Check win conditions
    if ((computerChoice === r && humanChoice === s) ||
        (computerChoice === p && humanChoice === r) ||
        (computerChoice === s && humanChoice === p)) {
        score[0] += 1
        alert(output(computerChoice, humanChoice, score, "lost!"))
        return 1
    }
    
    // Otherwise human wins
    score[1] += 1
    alert(output(computerChoice, humanChoice, score, "won!"))
    return 0
}

// Multi round of rps
function playGame(numRounds) {
    // if return 2 play again for the tie
    for (let x = 0; x < numRounds; x++){
        let result = playRound()
        if (result == 2) {
            x--
        }
    }

    alert(`Final Score was 
            \n Computer ${score[0]}:${score[1]} Human`)

}


playGame(prompt("How many rounds would you like to play (Default:3)\n Ties will not count toward number of rounds"))