const readline = require('readline-sync');
let userString = readline.question("Please enter any string you'd like: ");
let charIndex = readline.questionInt("Please enter the index of the character you want to check: ");
index = Number(charIndex);
if (charIndex < 0) {
    console.log("Entry Invalid. Please enter a value within the string length.");
}
else if (index >= userString.length) {
    console.log("Entry invalid. Please enter a value within the string length.");
}
else {
    console.log(`The character located at index ${index} is: ${userString[index]}`);
}