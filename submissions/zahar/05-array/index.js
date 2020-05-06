// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
function arrayMadness(a, b) {
    return a.reduce((acc, val) => acc + val ** 2, 0) > b.reduce((acc, val) => acc + val ** 3, 0);
}

// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
function differenceInAges(ages){
    let youngest = ages[0];
    let oldest = ages[0];
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] < youngest) {
            youngest = ages[i];
        } else if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }

    return [youngest, oldest, oldest - youngest];
}

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i-1] > 1) {
            console.log('index=', i, arr);
            return arr[i];
        }
    }

    return null;
}
console.log(firstNonConsecutive([1,2,4,5]));

// https://www.codewars.com/kata/571d42206414b103dc0006a1
const arr = N => {
    const result = [];
    for (let i = 0; i < N; i++) {
        result.push(i);
    }

    return result;
};

// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let sum = 0;
    for(let item of arr) {
        if (item > 0) {
            sum += item;
        }
    }

    return sum;
}


// https://www.codewars.com/kata/57ab2d6072292dbf7c000039
function correctPolishLetters (string) {
    const LETTER_MAPPING = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z'
    };
    let newString = '';
    for (let i=0; i < string.length; i++) {
        if (LETTER_MAPPING[string[i]]) {
            newString += LETTER_MAPPING[string[i]];
        } else {
            newString += string[i];
        }
    }

    return newString;
}

function correctPolishLetters (string) {
    var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}

var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
    return string.split('').map((c) => polishLetters[c] || c).join("");
}

// https://www.codewars.com/kata/5da9973d06119a000e604cb6
function countingValleys(s) {
    let currentLevel = 0;
    let passes = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            if (currentLevel++ === -1) {
                passes++;
            }
        } else if (s[i] === 'D') {
            currentLevel--;
        }
    }

    return passes;
}


function asteriscIt(n) {
    let result = '';
    const processNumber = (num, prevNum) => {
        let res =  '';
        let curNum = num % 10;
        let val = Math.floor(num / 10);
        let nextNum;
        while (val > 0) {
            res = curNum + res;
            nextNum = val % 10;
            if (nextNum % 2 === 0 && curNum % 2 === 0) {
                res = '*' + res;
            }
            curNum = nextNum;
            val = Math.floor(val/10);
        }
        res = curNum + res;
        if (prevNum % 2 === 0) {
            res = '*' + res;
        }

        return res;
    };

    if (Array.isArray(n)) {
        for (let i = 0; i < n.length; i++) {
            if (i > 0 && n[i] < 10 && n[i] % 2 === 0 && n[i-1] % 10 % 2 === 0) {
                result += '*';
            }
            result += processNumber(n[i], i>0 ? n[i-1] % 10 : 1);
        }
    } else if (typeof n === 'string') {
        for (let i = 0; i < n.length; i++) {
            result += n[i];
            if (i < n.length - 1 && Number(n[i]) % 2 === 0 && Number(n[i+1]) % 2 === 0) {
                result += '*';
            }
        }
    } else {
        result = processNumber(n);
    }

    return result;
};

// https://www.codewars.com/kata/5ac54bcbb925d9b437000001
function findMiddle(str){
    const matches = str && typeof str === 'string' && str.match(/[0-9]/g);
    if (!matches || matches.length === 0) {
        return -1;
    }
    const numb = matches.reduce((acc, val) => acc * val).toString();

    return +numb.substr(Math.floor(numb.length / 2) - 1 + numb.length % 2, numb.length % 2 === 0 ? 2 : 1);
}


// https://www.codewars.com/kata/57d001b405c186ccb6000304
function iTri(s){
//its gonna be a long day!
    const TOTAL_DISTANCE = 2.4 + 112 + 26.2;
    const leftDistance = parseFloat(TOTAL_DISTANCE - s).toFixed(2);
    if (s === 0) {
        return 'Starting Line... Good Luck!';
    } else if (s < 2.4) {
        return { 'Swim': `${leftDistance} to go!`};
    } else if (s < 2.4 + 112) {
        return { 'Bike': `${leftDistance} to go!` };
    } else if (s < TOTAL_DISTANCE - 10) {
        return { 'Run': `${leftDistance} to go!` };
    } else if (s >= TOTAL_DISTANCE) {
        return "You're done! Stop running!";
    } else {
        return { 'Run': 'Nearly there!'};
    }
}


function iTri(dist){
    const TOTAL_DISTANCE = 2.4 + 112 + 26.2;
    if (dist === 0) return 'Starting Line... Good Luck!';
    if (dist <= 2.4) return {'Swim': `${(TOTAL_DISTANCE - dist).toFixed(2)} to go!`};
    if (dist <= 114.4) return {'Bike': `${(TOTAL_DISTANCE - dist).toFixed(2)} to go!`};
    if (dist <= 127) return {'Run': `${(TOTAL_DISTANCE - dist).toFixed(2)} to go!`};
    if (dist < TOTAL_DISTANCE) return {'Run': `Nearly there!`};
    return "You're done! Stop running!";
}

// https://www.codewars.com/kata/51675d17e0c1bed195000001
function solution(digits){
    const consecutiveDigits = [];
    let i = 0;
    while (digits.length - i > 4) {
        consecutiveDigits.push(+digits.slice(i, i + 5));
        i++;
    }

    return Math.max(...consecutiveDigits);
}

// https://www.geeksforgeeks.org/count-ways-express-number-sum-consecutive-numbers/
// https://www.codewars.com/kata/5dae2599a8f7d90025d2f15
function consecutiveDucks(num) {
    // your code here
    let count = 0;
    let L = 1;
    while( L * (L + 1) < 2 * num) {
        const a = (num - (L * (L + 1) ) / 2) / (L + 1);
        if (a - Math.floor(a) === 0) count++;
        L++;
    }

    return count > 0;
}

