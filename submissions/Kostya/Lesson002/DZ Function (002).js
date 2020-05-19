// ПЕРВОЕ УПРАЖНЕНИЕ
var min = function (a, b) {
  if (b > a) return a;
  else return b;
};
console.log(min(2, -8));

// Второе УПРАЖНЕНИЕ

var isEven = function (x) {
  if (x < 0) x *= -1;
  if (x == 0) return true;
  if (x == 1) return false;
  else return isEven(x - 2);
};
console.log(isEven(55));
// Третье УПРАЖНЕНИЕ
var kolvo = 0;
var countBs = function (stroka, char) {
  var True = function (b) {
    if (b == char) return kolvo++;
  };
  var dlina = stroka.length;
  for (let x = 0; x < dlina; x++) True(stroka.charAt(x));
  return kolvo;
};
countBs('bonobbo', 'b');
console.log(kolvo);
