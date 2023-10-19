
let firstName = prompt('Please, enter your first name.');
let gender = prompt('What is your gender?(f or m)');
let age = +prompt(`How old are you, ${firstName} ?`);

const isAdult = age >= 18 ? "Yes" : "No";
if (isAdult === "Yes") {
    if (gender === "f") {
        document.write(`Dear Mrs. ${firstName}, you're invited to our party! Let's have lots of fun together!`)
    } else if (gender === "male") {
        document.write(`Dear Mr. ${firstName}, you're invited to our party! Let's have lots of fun together!`)
    } else {
        document.write(`Information is invalid.`)
    }
} else {
    document.write(`Sorry but you're not invited. You can have fun on your own.`)
}


