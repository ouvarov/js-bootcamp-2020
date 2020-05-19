let arr = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
  let arrNewReverse = [];
  for (let i = 1; i <= arr.length; i++) {
    arrNewReverse.push(arr[arr.length - i]);
  }
  return arrNewReverse;
};

console.log(reverseArray(arr));

const reverseArrayInPlace = (arr) => {
  for (let i = 1, tmp; i <= arr.length / 2; i++) {
    tmp = arr[i - 1];
    arr[i - 1] = arr[arr.length - i];
    arr[arr.length - i] = tmp;
  }
  return arr;
};

console.log(reverseArrayInPlace(arr));
