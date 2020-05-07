
const range = (firstNumber, lastNumber, condition) => {
    const arr = [];
    let count = firstNumber;
    if (condition > 0) {
        while (count < lastNumber) {
            arr.push(count);
            count += condition;
        }
    } else if (condition <= 0) {
        const positiveNumber = -condition;
        while (count >= lastNumber) {
            arr.push(count);
            count -= positiveNumber;
        }
    } else {
        while (count <= lastNumber) {
            arr.push(count);
            count++;
        }
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
    return array.sort((a, b) => b - a);
};
console.log(reverseArrayInPlace(arrayValue));
