function getComputerChoice() {
	let choice =  Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return "rock"
		case 1:
			return "paper"
		case 2:
			return "scissors"
	}
}

function getHumanChoice() {
	let input = prompt("Please enter your choice: 'rock', 'paper', or 'scissors'");

	while (!["rock", "paper", "scissors"].includes(input)) {
		input = prompt("Invalid choice, please enter: 'rock', 'paper', or 'scissors'")
	}

	return input;
}

function playRound(humanChoice, computerChoice) {
	// 1: player win, -1: computer win, 0: tie
	// ignores ties in checks and returns a tie by default if no early return

	console.log(`You played: ${humanChoice}`)
	console.log(`Computer played: ${computerChoice}`);

	if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			return -1;
		}
		if (computerChoice == "scissors") {
			return 1;
		}
	}

	if (humanChoice == "paper") {
		if (computerChoice == "scissors") {
			return -1;
		}
		if (computerChoice == "rock") {
			return 1;
		}
	}

	if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			return -1;
		}
		if (computerChoice == "paper") {
			return 1;
		}
	}

	return 0;
}

function handleResults(winner) {
	if (winner == 1) {
		playerScore++;
		console.log("You won")
	} else if (winner == -1) {
		computerScore++;
		console.log("Computer won")
	} else {
		console.log("It was a draw");
	}
	console.log(`Player Score: ${playerScore}`)
	console.log(`Computer Score: ${computerScore}`)
}

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
	let result = playRound(getHumanChoice(), getComputerChoice());
	handleResults(result)
}
