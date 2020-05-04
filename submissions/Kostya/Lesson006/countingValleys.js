function countingValleys(s) {
    const moves = {
        U: 1,
        F: 0,
        D: -1,
    }
    let volleys = 0, summa = 0, indicator = 0;
    for (let i of s) {
        for (let move in moves) {
            if (i === move) {
                summa += moves[i];
                if (summa < 0) {
                    indicator = 1;
                }
                if (summa === 0 && indicator === 1) {
                    volleys += 1;
                    indicator = 0;
                }
            }

        }

    }
    return volleys;
}
console.log(countingValleys('FUFFDDFDUDFUFUFFUFFDDFDUDFUFUF'));
