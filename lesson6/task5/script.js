'use strict';

function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

const minNumber = min(14, 79);
console.log("Minimum number is:", minNumber);
