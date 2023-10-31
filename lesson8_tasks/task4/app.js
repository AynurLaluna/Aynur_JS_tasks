
const calculate = {
    num1: +prompt('Her hansi bir eded daxil edin'),
    num2: +prompt('Her hansi bir eded daxil edin'),
    cem: () => {
        console.log(calculate.num1 + calculate.num2);
    },
    ferq: () => {
        console.log(calculate.num1 - calculate.num2);
    },
    hasil: () => {
        console.log(calculate.num1 * calculate.num2);
    },
    qismet: () => {
        console.log(calculate.num1 / calculate.num2);
    }

}
calculate.cem();
calculate.ferq();
calculate.hasil();
calculate.qismet();

