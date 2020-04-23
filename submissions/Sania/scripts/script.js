const fun = (a, b) => {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return 'значение ровно';
    }
};
console.log(fun(10, 10));

const fun1 = (n) => {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n < 0) {
        return fun1(-n);
    } else {
        return fun1(n - 2);
    }
};
console.log(fun1(50));

const fun2 = (text, symbol) => {
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            counter += 1;
        }
    }
    return counter;
};

console.log(fun2('assssss', 's'));

const fun3 = (numb) => {
    const count = numb + '';
    var sum = 0;
    for (var i = 0; i < count.length; i++) {
        if (count[i] % 2 === 0) {
            sum += +count[i];
        }
    }
    return sum;
};
console.log(fun3(123456));
