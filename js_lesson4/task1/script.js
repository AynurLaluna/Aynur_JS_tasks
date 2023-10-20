const myNumber = 28;
const findMyNumber = +prompt("What is the number in my mind? (between 0 and 50)");
let numberAttempts = 0;

if (isNaN(findMyNumber)) {
    alert("Enter a valid number");
} else {
    numberAttempts = ++numberAttempts;
    /*nece cehde tapilmaq hissesini hell ede bilmedim*/
}

if (findMyNumber < myNumber) {
    alert("Please try a higher.");
} else if (findMyNumber > myNumber) {
    alert("Please try a lower number.");
} else {
    alert(`YAY! You got it right! It is indeed ${myNumber}.`);
    console.log("Kapital Bank hesabına 1000 azn köçürülsün.");
}