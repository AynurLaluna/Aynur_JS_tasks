
const number = +prompt("Enter a number:");

let total = 1;
if (number) {
    for (let i = 1; i <= number; i++) {
        total *= i;
    }
    document.write(`Total of the numbers from 1 to ${number} is: ${total}.`);
} else {
    alert("Please enter a valid number.");
}
