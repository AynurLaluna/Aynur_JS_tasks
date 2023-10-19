let area = +prompt("Evinizin sahəsi nə qədərdir?");
let price = +prompt("Evin qiyməti nə qədərdir?");
let currency = prompt("Which currency?(AZN / USD / EUR)");

const interested = area > 2000 && price === 99999 && currency === "AZN" ? "Hə" : "Yox";

if (interested === "Hə") {
    document.write('Evi almaq istəyirəm.');
} else {
    document.write('Evlə maraqlanmıram.');
}