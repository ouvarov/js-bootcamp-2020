const deepEqual = (obj, obj2) => {
  //   let boolean = false;
  //           }
  //       }
  // for (let prop in obj2){
  // }
  //   if (obj === obj2) {
  //       boolean = true;
  //       return boolean;
  //   }
  //   return boolean;
  return JSON.stringify(obj) === JSON.stringify(obj2);
};

var obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
