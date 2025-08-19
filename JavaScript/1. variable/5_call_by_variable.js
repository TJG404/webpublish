//Call by value : 기본형
let a = 100;
let b = "홍길동";
let c = a;  //c = 100;
console.log('c--> ', c, typeof c);

//Call by reference : 참조형
let aa = [1, 2, 3];
let bb = {name: "홍길동"};
let cc = aa; //aa 주소를 통해 배열 객체를 공유
console.log(typeof aa, typeof bb);
console.log('cc--> ', cc, typeof cc);
