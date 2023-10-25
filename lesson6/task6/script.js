'use strict';

function calc() {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operation";
    }
}
let a = +prompt("Istədiyiniz bir ədədi daxil edin:");
let b = +prompt("0 istisna olmaqla, istədiyiniz ədədi daxil edin:");
let operation = prompt("Riyazi əməliyyat formasını daxil edin(+, -, *, /):");

const result = calc(a, b, operation);
document.write("Riyazi hesablamanın nəticəsi:", result);
