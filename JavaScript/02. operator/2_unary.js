/**
 * 단항 연산자 : ++, --, !, !!
 */
let a = 10;
console.log(++a);   //11
console.log(a++);   //11 --> 12
console.log(a);     //12

let b = 10;
console.log(--b);   //9
console.log(b--);   //9 --> 8
console.log(b++);   //8 --> 9
console.log(++b);   //10
console.log(b);     //10

let flag = true;
console.log(flag);  //true
console.log(!flag); //false
console.log(!!flag); //true

