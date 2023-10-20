const rowNumber = 5;

for (let i = 0; i < rowNumber; i++) {
    /*i setir loopu ucundur*/
    let star = " ";
    for (let b = 0; b < rowNumber - i; b++) {
        star += "*";
    }
    /*b daxili, yeni ulduz isarelerinin loopu ucundur*/
    document.write(star);
}