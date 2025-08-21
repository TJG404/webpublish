/**
 * 함수 표현 방식
 * 
 * - 일반함수 : function 함수명(매개변수){  실행문;  }
 * - 변수형(화살표) 함수 : const 함수명 = (매개변수) => {  실행문;  }
 * - 변수형 함수 : const 함수명 = function() { 실행문; }
 * - 콜백함수(익명함수, anoymous) 
 *   : 함수에서 호출되는 함수, 파라미터 인자로 입력 - 형식: 함수명(() => {})
 */

//1. 일반 함수
function add1(a, b) {
    return a + b;
}

//2. 화살표 함수
const add2 = (a, b) => {
    return a + b;
}

//3. 변수형 함수
const add3 = function(a, b) {
    return a + b;
}

//4. 콜백함수
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, cur) => { return acc + cur; });
let sum2 = numbers.reduce((acc, cur) => acc + cur);

//함수 호출
console.log(`add1 = ${add1(1, 2)}`);
console.log(`add2 = ${add2(1, 2)}`);
console.log(`add3 = ${add3(1, 2)}`);
console.log(`sum = ${sum}`);
console.log(`sum2 = ${sum2}`);