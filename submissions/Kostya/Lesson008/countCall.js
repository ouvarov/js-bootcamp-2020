const func = () => {
  let count = 0;
  return function () {
    console.log(count);
    return count++;
  };
};

let counter1 = func();

counter1();
counter1();
