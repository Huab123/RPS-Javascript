// Set for the ease of writing in this project
let r = "rock"
let p = "paper"
let s = "scissors"
let score = [0, 0]

// Create output
function output(computer, human, score ,result) {
    return `Computer chose  ${computer} , You chose ${human} 
            \nWhich means you ${result} 
            \nThe score is now Computer ${score[0]}:${score[1]} Human`
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
            let humanChoice = prompt("Rock, Paper, Scissors? \n(0, 1, 2 respectively can also be input for ease of playing) ")
            humanChoice = humanChoice.toLowerCase().trim();

            // Can input 0, 1 or 2 for rock, paper, or scissor respectively
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
    // If return 2 play again for the tie
    for (let x = 0; x < numRounds; x++){
        let result = playRound()
        if (result == 2) {
            x--
        }
    }

    alert(`Final Score was 
            \nComputer ${score[0]}:${score[1]} Human`)

}


playGame(prompt("How many rounds would you like to play (Default:3)\nTies will not count toward number of rounds"))