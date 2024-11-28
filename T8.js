// Prompt the user for the start and end years
let startYear = prompt("Enter the start year:");
let endYear = prompt("Enter the end year:");

// Convert inputs to numbers
startYear = parseInt(startYear);
endYear = parseInt(endYear);

// Validate the input
if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    document.getElementById("message").textContent = "Please enter valid years where the start year is less than or equal to the end year.";
} else {
    const leapYears = [];

    // Find leap years in the range
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year); // Add leap year to the array
        }
    }

    if (leapYears.length > 0) {
        // Display the leap years in an unordered list
        const ul = document.getElementById("leap-years");
        leapYears.forEach(year => {
            const li = document.createElement("li");
            li.textContent = year;
            ul.appendChild(li);
        });
    } else {
        document.getElementById("message").textContent = "No leap years found in the given range.";
    }
}
