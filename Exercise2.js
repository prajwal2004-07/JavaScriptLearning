//Exercise No.2:- Snake Water Gun Game

function snakeWaterGunGame() {
    // Choices for the game
    const choices = ["Snake", "Water", "Gun"];

    // Function to generate a random computer choice
    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "Snake" && computerChoice === "Water") ||
            (playerChoice === "Water" && computerChoice === "Gun") ||
            (playerChoice === "Gun" && computerChoice === "Snake")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    // Get player choice
    const playerChoice = prompt("Choose: Snake, Water, or Gun").toLowerCase();

    // Validate player choice
    if (!choices.includes(playerChoice)) {
        console.log("Invalid choice. Please choose Snake, Water, or Gun.");
        return;
    }

    // Get computer choice
    const compChoice = computerChoice();

    // Display choices
    console.log("Your choice: " + playerChoice);
    console.log("Computer's choice: " + compChoice);

    // Determine and display the winner
    const result = determineWinner(playerChoice, compChoice);
    console.log(result);
}

// Run the game
snakeWaterGunGame();
