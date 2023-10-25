/* Number.isInteger ededin tam eded olub olmadini yoxlayan daxili JS metodudu*/

function isEven(number) {
    if (Number.isInteger(number / 2)) {
        return true;
    } else {
        return false;
    }
}


let userNum = +prompt("Enter a number:");

if (isEven(userNum)) {
    document.write(userNum + " is an even number");
} else {
    document.write(userNum + " is not an even number.");
}