let arr = ['x1', 'x', 2];
let x= 'x1';
let KArrValue =  (a, x) =>
{
    var est=false;
   for (let i = 0; i<a.length; i ++)
   {

       if (a[i] == x)
           return est = true;
   }
        return est
}
console.log(KArrValue(arr,x));