/**
 * try ~ catch : 자바스크립 에서 에러 처리
 */

//1. 자바스크립트 --> 배열을 동적으로 관리
//   자바 --> 배열 객체가 정적관리, exception 발생
let numbers = [1, 2, 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); 

numbers[9] = 1000;
console.log(numbers[9]); 


//2. Number 클래스
let numbers2 = new Number(12345);
try {
    for(number of numbers2) {
        console.log(number);    
    }
} catch(error) {
    console.log('에러처리는 엔진에게 맡기세요!');    
}



