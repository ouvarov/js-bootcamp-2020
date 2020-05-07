const range = (firstNumber, lastNumber, condition = 1) => {
    const arr = [];
    for (let i = firstNumber; (condition > 0) ? i <= lastNumber : i >= lastNumber; i += condition) {
        arr.push(i);
    }
    return arr;
};

const sum = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const reverseArray = (array) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.unshift(array[i]);
    }
    return newArr;
};

const arrayValue = [1, 2, 3, 4, 5];
const reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const temporary = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temporary;
    }
    return array;
};
console.log(reverseArrayInPlace(arrayValue));

const arrayToList = (array) => {
    const newObject = array.shift();
    if (newObject === undefined) {
        return null;
    }
    return {
        list: newObject,
        rest: arrayToList(array)
    };
};

const listToArray = (arrList) => {
    const array = [];
    let i = arrList;
    while (i) {
        array.push(i.list);
        i = i.rest
    }
    return array;
};

const prepend = (value, list) => {
    return { value, rest: list };
};

const nth = (list, n) => {
    if (!list) {
        return undefined;
    }
    return (n === 0) ? list.value : nth(list.rest, n - 1);
};

const numberOfCalls = () => {
    let calls = 0;
    return () => {
        return calls++;
    };
};

const randomNumber = () => {
    const array = [];
    return () => {
        const getRandomNumber = Math.floor(Math.random() * 100) + 1;
        if (array.length > 100) {
            return 'error all numbers are';
        }
        else if (array.includes(getRandomNumber)) {
            return randomNumber();
        }
        else {
            array.push(Math.floor(getRandomNumber));
            return array;
        }
    };
};
