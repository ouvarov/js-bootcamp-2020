let beeramid = (bonus, can) => {
  let levels,
    all = 0;

  for (let level = 0; level * level * can + all <= bonus; level++) {
    all = level * level * can + all;
    levels = level;
  }
  return levels;
};
console.log(beeramid(5000, 3));
