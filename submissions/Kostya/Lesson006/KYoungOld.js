let familyAges = [32, 4, 88, 100, 10, 5];

const youngOld = (arr) => {
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
  arr.sort(compareNumeric);
  return [arr[0], arr[arr.length - 1], arr[arr.length - 1] - arr[0]];
};
console.log(youngOld(familyAges));
