// Ask the user for the number of dice
let numDice = parseInt(prompt("Enter the number of dice:"));

// Ask the user for the desired sum
let targetSum = parseInt(prompt("Enter the sum of the dice eyes you are interested in:"));

// Number of simulations
const numSimulations = 10000;

// Function to roll a single die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Returns a value between 1 and 6
}

// Function to simulate rolling the dice and calculate the probability
function calculateProbability(dice, sum, simulations) {
    let successCount = 0;

    for (let i = 0; i < simulations; i++) {
        let currentSum = 0;

        // Roll the given number of dice and calculate the sum
        for (let j = 0; j < dice; j++) {
            currentSum += rollDie();
        }

        // Check if the current sum matches the target sum
        if (currentSum === sum) {
            successCount++;
        }
    }

    // Calculate the probability as a percentage
    return (successCount / simulations) * 100;
}

// Validate user input
if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum <= 0) {
    document.getElementById("result").textContent = "Please enter valid positive integers for the number of dice and the target sum.";
} else {
    // Calculate probability
    const probability = calculateProbability(numDice, targetSum, numSimulations);

    // Display the result on the HTML document
    document.getElementById("result").textContent =
        `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%.`;
}
