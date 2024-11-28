//Prompt the user for three integers
let num1=parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
let num3 = parseInt(prompt("Enter the third integer:"));

//calculate the sum, product and average
let sum = num1 + num2 + num3;
let product =num1 * num2 *num3;
let average = sum / 3;

// Get a reference to the body element
let body = document.querySelector("body");

// Create and append the results to the HTML document
let sumElement = document.createElement("p");
sumElement.textContent = `Sum: ${sum}`;
body.appendChild(sumElement);

let productElement = document.createElement("p");
productElement.textContent = `Product: ${product}`;
body.appendChild(productElement);

let averageElement = document.createElement("p");
averageElement.textContent = `Average: ${average.toFixed(2)}`;
body.appendChild(averageElement);