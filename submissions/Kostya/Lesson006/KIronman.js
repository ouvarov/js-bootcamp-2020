function iTri(s) {
    let losung = `${(140.6 - s).toFixed(2)} to go!`;
    if (s <= 0) {
        return 'Starting Line... Good Luck!';
    };
    if (s <= 2.4) {
        return {'Swim': losung};
    }
    if (s <= 114.4) {
        return {'Bike': losung};
    }
    if (s < 130.6) {
        return {'Run': losung};
    }
    if (s < 140.6) {
        return {'Run': 'Nearly there!'};
    }
    if (s >= 140.6) {
        return "You're done! Stop running!";
    }
};
console.log(iTri(130.6));
