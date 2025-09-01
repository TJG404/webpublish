/**
 * Math 클래스의 메소드 : static으로 정의됨
 * - Math.상수명, Math.메소드명()
 */

let a = 123.856;

console.log(`Math.abs(value) --> ${Math.abs(a)}`);
console.log(`Math.floor(value) --> ${Math.floor(a)}`);
console.log(`Math.trunc(value) --> ${Math.trunc(a)}`);
console.log(`Math.round(value) --> ${Math.round(a)}`);
console.log(`Math.max(1,2,3,4,5) --> ${Math.max(1,2,3,4,5)}`);
console.log(`Math.min(1,2,3,4,5) --> ${Math.min(1,2,3,4,5)}`);

//자릿수별 절삭
let b = 123.456;
let result = Number(b.toPrecision(5)); //맨 앞자리부터 절삭 + 반올림
console.log(result);

//임의의 숫자 반환
console.clear();
console.log(`Math.random() --> ${Math.random()}`);

//1~100 사이의 숫자를 임의로 반환
let rnum = Math.floor(Math.random() * 100 + 1);
console.log(`Math.random() --> ${ rnum }`);


