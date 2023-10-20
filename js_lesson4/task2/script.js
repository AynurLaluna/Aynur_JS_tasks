
const number = +prompt("Enter a number:");

let sum = 0;

if (number) {
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    document.write(`The sum of numbers from 1 to ${number} is: ${sum}.`);
} else {
    alert("Please enter a valid number.");
}