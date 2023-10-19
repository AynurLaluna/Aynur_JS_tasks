let day = +prompt('What day of the week is today? 1-7');

if (day === 1) {
    document.write("Oh no!  It is Monday again :(")
}
else if (day === 2) {
    document.write("Today is Tuesday!")
}
else if (day === 3) {
    document.write("Today is Wednesday! 3 days until the weekend!")
}
else if (day === 4) {
    document.write("Finally Thursday!")
}
else if (day === 5) {
    document.write("Oh! Thank god, it's Friday!!!")
}
else if (day === 6) {
    document.write("It's Saturday! Let's the weekend begin!")
}
else if (day === 7) {
    document.write("YAY! It's Sunday!!!")
}
else {
    document.write("Information is unvalid.")
}

/*
switch (day) {
    case 1:
        document.write("Oh no!  It is Monday again :(");
        break;

    case 2:
        document.write("Today is Tuesday!");
        break;
    case 3:
        document.write("Today is Wednesday! 3 days until the weekend!");
        break;
    case 4:
        document.write("Finally Thursday!");
        break;
    case 5:
        document.write("Oh! Thank god, it's Friday!!!");
        break;
    case 6:
        document.write("It's Saturday! Let's the weekend begin!");
        break;
    case 7:
        document.write("YAY! It's Sunday!!!");
        break;
    default:
        document.write("Information is unvalid.");
}*/