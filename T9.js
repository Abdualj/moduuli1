// Prompt the user for an integer
let number = prompt("Enter an integer:");

// Convert the input to an integer
number = parseInt(number);

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number other than 1 and itself, it's not prime
        }
    }
    return true;
}

// Display the result
const resultElement = document.getElementById("result");

if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid integer.";
} else if (isPrime(number)) {
    resultElement.textContent = `${number} is a prime number.`;
} else {
    resultElement.textContent = `${number} is not a prime number.`;
}
