// Ask the user for the number of dice rolls
let numberOfRolls = prompt("Enter the number of dice rolls:");

// Convert the input to a number
numberOfRolls = parseInt(numberOfRolls);

if (isNaN(numberOfRolls) || numberOfRolls <= 0) {
    // Handle invalid input
    document.getElementById("result").textContent = "Please enter a valid positive number.";
} else {
    let sum = 0;

    // Roll the dice the specified number of times
    for (let i = 0; i < numberOfRolls; i++) {
        let roll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        sum += roll; // Add the result to the sum
    }

    // Display the sum of the dice rolls
    document.getElementById("result").textContent = `You rolled ${numberOfRolls} dice. The sum of the rolls is ${sum}.`;
}
