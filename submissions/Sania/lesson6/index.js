const range = (firstNumber, lastNumber, condition = 1) => {
  const arr = [];
  for (
    let i = firstNumber;
    condition > 0 ? i <= lastNumber : i >= lastNumber;
    i += condition
  ) {
    arr.push(i);
  }
  return arr;
};
console.log(range(1, 50));

const sum = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};
console.log(sum([3, 2, 4]));

const reverseArray = (array) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
};
console.log(reverseArray([3, 2, 4]));

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
    rest: arrayToList(array),
  };
};

const listToArray = (arrList) => {
  const array = [];
  let i = arrList;
  while (i) {
    array.push(i.list);
    i = i.rest;
  }
  return array;
};
console.log(listToArray(arrayToList([3, 2, 4])));

const prepend = (value, list) => {
  return { value, rest: list };
};

console.log(prepend(10, arrayToList([3, 2, 4])));

const nth = (list, n) => {
  if (!list) {
    return undefined;
  }
  return n === 0 ? list.value : nth(list.rest, n - 1);
};
console.log(nth(arrayToList([4, 5, 5]), 5));

const numberOfCalls = () => {
  let calls = 0;
  return () => {
    return calls++;
  };
};
console.log(numberOfCalls()());

const randomNumber = () => {
  const array = [];
  return () => {
    const getRandomNumber = Math.floor(Math.random() * 100) + 1;
    if (array.length > 100) {
      return 'error all numbers are';
    } else if (array.includes(getRandomNumber)) {
      return randomNumber();
    } else {
      array.push(Math.floor(getRandomNumber));
      return array;
    }
  };
};

console.log(randomNumber());
