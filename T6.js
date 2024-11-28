// Display a confirmation window to the user
let confirmCalculation = confirm("Should I calculate the square root?");

// Get the result paragraph element
let resultElement = document.getElementById("result");

if (confirmCalculation) {
    // Ask the user for a number
    let number = prompt("Enter a number:");

    // Convert the input to a number
    number = parseFloat(number);

    // Check if the number is valid and non-negative
    if (!isNaN(number) && number >= 0) {
        // Calculate the square root
        let squareRoot = Math.sqrt(number);
        resultElement.textContent = `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
    } else {
        // Handle invalid input
        resultElement.textContent = "Please enter a valid non-negative number.";
    }
} else {
    // If the user selects Cancel
    resultElement.textContent = "The square root is not calculated.";
}
