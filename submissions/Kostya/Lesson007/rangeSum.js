const range = (from, to, step) => {
  if (step === undefined) step = 1;
  let x = 0;
  if (from > to) {
    x = from;
    from = to;
    to = x;
  }
  let arr = [];
  for (; from <= to; from += Math.abs(step)) {
    arr.push(from);
  }
  if (x !== 0) {
    arr = arr.reverse();
  }
  console.log(arr);
  return arr;
};
const sum = (arr) => {
  let summa = 0;
  for (let i = 0; i < arr.length; i++) {
    summa += arr[i];
  }
  return summa;
};
console.log(sum(range(5, 2, -1)));
