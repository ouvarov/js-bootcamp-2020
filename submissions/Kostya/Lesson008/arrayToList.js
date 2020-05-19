const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    };
  }
  return list;
};
console.log(arrayToList([10, 20, 30]));

let arrayToList2 = (arr) => {
  let list = null;

  function recurs(arr) {
    list = { value: arr.pop(), rest: list };
    return arr.length === 0 ? list : recurs(arr);
  }

  return recurs(arr);
};

console.log(arrayToList2([10, 20, 30]));

const listToArray = (list) => {
  let arr = [];
  array(list);

  function array(list) {
    if (list['rest'] === null) return arr.push(list['value']);
    arr.push(list['value']);
    list = list['rest'];
    array(list);
  }

  return arr;
};

console.log(listToArray(arrayToList([10, 20, 30])));
let prepend = (value, rest) => {
  let list = {};

  function funToList(value, rest) {
    list = {
      value: value,
      rest: rest,
    };
    return list;
  }

  return funToList(value, rest);
};

console.log(prepend(10, prepend(20, prepend(30, null))));

let nth = (list, number) => {
  if (number > 0) {
    number--;
    if (list['rest'] == null && number >= 0) {
      return undefined;
    }
    list = list['rest'];
    return nth(list, number);
  }
  return list['value'];
};

console.log(nth(arrayToList([10, 20, 30]), 2));
// //
// // // console.log(arrayToList([10, 20, 30]));
// // // → {value: 10, rest: {value: 20, rest: null}}

// // // console.log(listToArray(arrayToList([10, 20, 30])));
// // // // → [10, 20, 30]

// // // console.log(prepend(10, prepend(20, null)));
// // // // → {value: 10, rest: {value: 20, rest: null}}

// // // console.log(nth(arrayToList([10, 20, 30]), 1));
// // // // → 20
