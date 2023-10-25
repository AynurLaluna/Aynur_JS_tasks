
function totalSum(ruble, dollar, exchange) {
    const totalRuble = ruble + (dollar * exchange);
    document.write('Depozit hesabınızda ' + totalRuble + " rubl məbləğ var.");
}

const ruble = +prompt("Hesabınızda neçə rubl var?");
const dollar = +prompt("Hesabınızda neçə dollar var?");
const exchange = 75;

totalSum(ruble, dollar, exchange);