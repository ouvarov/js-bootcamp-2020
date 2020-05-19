const random = () => {
  let arr = [];
  let number = 0;
  return function recurse() {
    number = Math.floor(Math.random() * 100);
    for (let i = 0; i < 100; i++) {
      if (arr.length !== 100 && number === arr[i]) {
        return recurse();
      }
      if (arr.length === 100) {
        arr = [];
      }
    }
    arr.push(number);
    return number;
  };
};

let number = random();
console.log(number());
console.log(number());
