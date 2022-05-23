'use strict';
function pow(x,n){
  return x**n;  
}

function sumTo(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}

function factorial(n){
 if(n>0)
   return (n*factorial(n-1));
   else 
     return 1;
  }

 function fib(n) {
  let a = 1n;
  let b = 1n;
 if (n==0) return 0;
 if (n==1) return 1;
 if (n==2) return 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function compare(x){
  let res=function(){
    let y=prompt('Введите число y');
    if (y>x) return true
      else if (y<x) return false
	else return null;
    
  }
  return res();
  
}
