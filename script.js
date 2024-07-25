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

function playRound(humanChoice, computerChoice) {
	// 1: player win, -1: computer win, 0: tie
	// ignores ties in checks and returns a tie by default if no early return

	const resultContainer = document.createElement('div');
	resultContainer.classList.add("result-container");

	resultContainer.appendChild(getPara(`You played: ${humanChoice}`));
	resultContainer.appendChild(getPara(`Computer played: ${computerChoice}`));

	if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			return handleResults(-1, resultContainer);
		}
		if (computerChoice == "scissors") {
			return handleResults(1, resultContainer);
		}
	}

	if (humanChoice == "paper") {
		if (computerChoice == "scissors") {
			return handleResults(-1, resultContainer);
		}
		if (computerChoice == "rock") {
			return handleResults(1, resultContainer);
		}
	}

	if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			return handleResults(-1, resultContainer);
		}
		if (computerChoice == "paper") {
			return handleResults(1, resultContainer);
		}
	}

	return handleResults(0, resultContainer);
}

function handleResults(winner, resultContainer) {
	if (winner == 1) {
		playerScore++;
		resultContainer.appendChild(getPara("You won"));
	} else if (winner == -1) {
		computerScore++;
		resultContainer.appendChild(getPara("Computer won"));
	} else {
		resultContainer.appendChild(getPara("It was a draw"));
	}
		resultContainer.appendChild(getPara(`Player Score: ${playerScore}`));
		resultContainer.appendChild(getPara(`Computer Score: ${computerScore}`));

	if (gameOver()) {
		const winner = document.createElement("div");
		winner.classList.add("winner");
		if (playerScore >= 5) {
			resultContainer.appendChild(getPara("Congratulations on winning!"));
		} else {
			resultContainer.appendChild(getPara("Better luck next time"));
		}
	}

	return resultContainer;
}

function getPara(text) {
	let para = document.createElement("p");
	para.textContent = text;
	return para;
}

function gameOver() {
	return playerScore >= 5 || computerScore >= 5;
}

let playerScore = 0;
let computerScore = 0;
let resultsDisplay = document.querySelector("#results-display")

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
	if (!gameOver()) {
		resultsDisplay.appendChild(playRound("rock", getComputerChoice()));
	}
})

paperBtn.addEventListener("click", () => {
	if (!gameOver()) {
		resultsDisplay.appendChild(playRound("paper", getComputerChoice()));
	}
})

scissorsBtn.addEventListener("click", () => {
	if (!gameOver()) {
		resultsDisplay.appendChild(playRound("scissors", getComputerChoice()));
	}
})
