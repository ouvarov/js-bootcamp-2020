// Task Almost Even

let splitInteger = function(num, parts) {
    let arr = [];
    while (parts>0){
        let divide = Math.floor(num/parts);
        arr.push(divide);
        num = num - divide;
        --parts;
    }
    return arr;
};

// END Task Almost Even


// Task Beeramid
let beeramid = function(bonus, price) {
    let sum=0,
        n=1, counter=0;
    while (bonus>sum){
        sum+=Math.pow(n,2)*price;
        if (bonus<sum){return counter;}
        n++;
        counter++;
    }
    return counter;
};
// END Task Beeramid


// Task Beginner Series #1 School Paperwork
function paperwork(n, m) {
    return (n<0)||(m<0)?0:n*m;
}
// END Task Beginner Series #1 School Paperwork

// Task You only need one - Beginner
function check(a, x) {
    return a.includes(x)?Boolean(1):Boolean(0);
}
// END Task You only need one - Beginner


// Task Total amount of points
function points(games) {
    let sum = 0;


    for(let i=0;i<games.length;i++){
        if(parseInt(games[i][0])>parseInt(games[i][2])){
            sum+=3;
        } else if(parseInt(games[i][0])===parseInt(games[i][2])){
            sum+=1;
        }
    }

    return sum;

}
// END Task Total amount of points

// Task Array plus array
function arrayPlusArray(arr1, arr2) {
    let sum1=0,sum2=0;
    for(let i=0; i<arr1.length;i++){
        sum1+=parseInt(arr1[i]);
    }
    for(let i=0; i<arr2.length;i++){
        sum2+=parseInt(arr2[i]);
    }
    return sum1 + sum2;
}
// END Task Array plus array
