/**
 * Primitive Datatype (기본형)
 * - 정수형(Integer) : 100, 200, 1...
 * - 실수형(Float, Double) : 1.12234, 3.14...
 * - 문자형(Character : '', "") : '홍길동',"이순신"..
 * - 불린형(Boolean) : true, false
 * 
 * Reference Datatype (참조형)
 * - 객체형(Object) : 클래스(Class), 배열([], Array), JSON({}).. 
 */

//1. 정수형
let inumber = 100;
console.log("정수형 -> ", inumber);

//2. 실수형
let fnumber = 3.14;
console.log("실수형 -> ", fnumber);

//3. 문자형
let cname = "홍길동";
console.log("문자형 -> ", cname);

//4. 불린형
let flag = true;
console.log("불린형 -> ", flag);

//5. 객체형
let nameList = ["홍길동","이순신","김유신"];
console.log("배열 -> ", nameList);

//기본형, 참조형 데이터 초기화
let address1 = undefined;   //기본형 초기화
let address2 = null;        //참조형 초기화

//typeof : 데이터 비교
let x = 10;
let xx = 10;
let y = '10';
let obj = {'name':'홍길동'};

console.log(x, typeof x);
console.log(xx, typeof xx);
console.log(y, typeof y);
console.log(obj, typeof obj);
console.log(typeof x == typeof xx); //== 값 비교
console.log(typeof x === typeof xx); // === 값+데이터타입 비교
console.log(typeof x == typeof y); //false
console.log(typeof x === typeof y); // 
console.log(x == y); //true
console.log(x === y); //false
console.log(x == obj); //false








