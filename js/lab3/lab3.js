'use strict';
function getDecimal(num){
                return num - Math.floor(num); //округление вниз 
            }

function ucFirst(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))
        return true;
    else return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}

function camelize(str) {
    let id;
    while (str.includes("-")) {
        id = str.indexOf('-');
        str = str.slice(0, id) + str[id + 1].toUpperCase() + str.substring(id + 2);
    }
    return str;
}
       function fib(p){
        let a = 0;
        let b = 1;
        //Исключения
        if (p==0) return 0;
        if (p==1) return 1;
        for (let i = 2; i <= p; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }
 function fibs(N) {
    let a = [];
    let str = '';
    if (!Number.isNaN(N))
        if (N == 0) str = 0;
        else
            for (let p = 0; p < N; ++p) {
                a[p] = fib(p);
                str += a[p] + ' ';
            }
    else str = NaN;
 
    return str;
 }
function arrReverseSorted(arr){
let arr_reserve=[];

arr_reserve=arr.sort((a, b) => b - a);

alert(arr_reserve);
}

function sum() {
    let result = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
