const factorial = (n) => {
  return 1 * 2 * 3 * 4 * n;
};

console.log(factorial(5));

const a = () => {
  return b();
};

const b = () => {
  return a();
};

a();
