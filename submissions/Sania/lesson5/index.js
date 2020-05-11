// lesson 5
/* eslint-disable no-unused-vars */
const arrayMadness = (a, b) => {
  let sum1 = 0;
  let sum2 = 0;

  a.forEach(function (item) {
    sum1 += item ** 2;
  });

  b.forEach(function (item) {
    sum2 += item ** 3;
  });

  return sum1 > sum2;
};

const differenceInAges = (ages) => {
  const resultArr = [];
  const minVal = Math.min.apply(Math, ages);
  const maxVal = Math.max.apply(Math, ages);

  resultArr.push(minVal, maxVal, maxVal - minVal);

  return resultArr;
};

const firstNonConsecutive = (arr) => {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
};

const arr = (number) => {
  const newArr = [];
  for (let i = 0; i < number; i++) {
    newArr.push(i);
  }
  return newArr;
};

const positiveSum = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    if (item > 0) {
      sum += item;
    }
  });

  return sum;
};

const correctPolishLetters = (string) => {
  var key = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };
  return string.replace(/[ąćęłńóśźż]/g, (match) => key[match]);
};

const solution = (digits) => {
  let res = 0;

  for (let i = 0; i < digits.length; i++) {
    const number = digits.substr(i, 5);
    if (Number(number) > res) {
      res = Number(number);
    }
  }
  return res;
};
