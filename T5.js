// Prompt the user to enter a year
let year = prompt("Enter a year:");

// Convert the input to a number
year = parseInt(year);

// Function to check if a year is a leap year
function isLeapYear(year) {
    // A year is a leap year if divisible by 4 and either not divisible by 100 or divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

// Get the result paragraph element
let resultElement = document.getElementById("result");

// Check if the year is valid and determine if it's a leap year
if (!isNaN(year)) {
    if (isLeapYear(year)) {
        resultElement.textContent = `${year} is a leap year.`;
    } else {
        resultElement.textContent = `${year} is not a leap year.`;
    }
} else {
    resultElement.textContent = "Please enter a valid year.";
}
