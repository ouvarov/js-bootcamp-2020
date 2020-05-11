function range(start, end, step = 1) {
  const arr = [];
  for (let i = start; (step > 0 && i <= end) || i >= end; i += step) {
    arr.push(i);
  }

  return arr;
}
console.log(range(1, 20));

function reverseArray(arr) {
  const newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }

  return newArray;
}
console.log(reverseArray(range(1, 20)));

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log(i);
    const tmp = arr[i];
    const reversedIndex = arr.length - 1 - i;
    arr[i] = arr[reversedIndex];
    arr[reversedIndex] = tmp;
  }
}
const arr = [1, 5, 3, 6, 7, 9, 55];
reverseArrayInPlace(arr);
console.log(arr);

function arrayToList(arr) {
  const list = {};
  list.value = arr.shift();
  if (arr.length > 0) {
    list.rest = arrayToList(arr);
  } else {
    list.rest = null;
  }

  return list;
}

function listToArray(list) {
  const arr = [];
  arr.push(list.value);
  if (list.rest) {
    listToArray(list.rest);
  }

  return arr;
}
console.log(listToArray(arrayToList([1, 4, 6])));

function prepend(value, list) {
  let rest = null;
  if (list) rest = { ...list };

  return {
    value,
    rest,
  };
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, index) {
  if (index === 0) return list.value;
  if (list.rest) return nth(list.rest, --index);

  return undefined;
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// 20

function deepEqual(obj1, obj2) {
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    for (let i in obj1) {
      if (
        Object.prototype.hasOwnProperty.call(obj1, i) &&
        Object.prototype.hasOwnProperty.call(obj2, i)
      ) {
        return deepEqual(obj1[i], obj2[i]);
      }
    }
  } else if (obj1 === obj2) return true;

  return false;
}

const obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true

function getCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}
let counter = getCounter();
console.log(counter(), counter(), counter());

function getGenerator() {
  const arr = [];

  return function () {
    if (arr.length === 100) return 'array is full';
    let newNum = Math.floor(Math.random() * 100) + 1;
    while (arr.includes(newNum)) {
      newNum = Math.floor(Math.random() * 100) + 1;
    }
    arr.push(newNum);

    return newNum;
  };
}
const generator = getGenerator();
console.log(generator(), generator(), generator());
