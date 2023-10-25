'use strict';

function findLargestNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
function showLargestNum(num1, num2, num3) {
    const largest = findLargestNum(num1, num2, num3);
    document.write('The largest number is:', largest);
}

showLargestNum(27, 19, 2);
showLargestNum(5, 78, 143);
showLargestNum(12, 465979, 921);