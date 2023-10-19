
let firstName = prompt("What is your first name?");
let gender = prompt('What is your gender? (female or male)');

if (gender === 'female') {
    document.write(`Hello, mrs. ${firstName}! Nice to meet you!`)
}
else if (gender === 'male') {
    document.write(`Hello, mr. ${firstName}! Nice to meet you!`)
}
else {
    document.write('Information is not valid.')
}

/*
switch (gender) {
    case 'female':
        document.write(`Hello, mrs. ${firstName}! Nice to meet you!`);
        break;
    case "male":
        document.write(`Hello, mr. ${firstName}! Nice to meet you!`);
        break;
    default:
        document.write('Information is not valid.');
}  */