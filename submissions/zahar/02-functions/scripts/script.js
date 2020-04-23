const paperwork = (n, m) => {
    if (n <= 0 || m <= 0) {
        return 0;
    }
    return (n * m);
};

console.log(paperwork(5, 5));

const check = (a, x) => {
    return a.includes(x);
};

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 80));

const arrayPlusArray = (arr1, arr2) => {
    const arr3 = arr1.concat(arr2);
    var counter = 0;

    for (var i = 0; i < arr3.length; i++) {
        counter += arr3[i];
    }
    return counter;
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

function points (games) {
    var count = 0;
    for (var i = 0; i < games.length; i++) {
        var compare = games[i].split(':');
        if (compare[0] > compare[1]) {
            count += 3;
        } else if (compare[0] < compare[1]) {
            count += 0;
        } else {
            count += 1;
        }
    }
    return count;
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']));
