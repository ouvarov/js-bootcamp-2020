function findMiddle(str) {
    let proizvedenie = -1, otvet = -1, chetnost;
    if (typeof(str) !== 'string'){
        return otvet;
    }
    for (let i of str) {
        if (!isNaN(i) && i !== " ") {
            proizvedenie = Math.abs(proizvedenie) * i;
        }
    }
    if (proizvedenie < 0) {
        return otvet;
    }
    proizvedenie = String(proizvedenie);
    if ((proizvedenie.length) % 2 === 0) {
        chetnost = (proizvedenie.length) / 2;
        otvet = `${proizvedenie[chetnost - 1] + proizvedenie[chetnost]}`;
    }
    if ((proizvedenie.length) % 2 !== 0) {
        chetnost = (proizvedenie.length) / 2;
        otvet = proizvedenie[Math.floor(chetnost)];
    }
    if (otvet[0] === 0) {
        delete (otvet[0]);
    }
    return Number(otvet);
}

console.log(findMiddle('s7d8jd9'));

