//prompt the user for their name
let StudentName = prompt("What is your name?")

//Generate a random number between 1 and 4
let randomHouse = Math.floor(Math.random() *4) +1;

//initialize the house variable
let house;

//Determine thebhouse using a switch statment
switch (randomHouse) {
    case 1 :
        house = "gryffindor";
        break;
    case 2 :
        house = "slytherin";
        break;
    case 3 :
        house = "Hufflepuff";
        break;
    case 4 :
        house = "Ravenclaw";
        break;
}

//display the result on the webpage
let body = document.querySelector("body");
let result = document.createElement("p")
result.textContent = `${studentName}, you are ${house}!`
body.appendChild(result);