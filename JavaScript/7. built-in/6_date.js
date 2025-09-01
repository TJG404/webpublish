/**
 * Date 날짜 형식 클래스
 * - Date 클래스 생성후 getFullYear(), getDay()...
 */

console.log(Date.now());
console.log(new Date()); //권장함!!!

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();

console.log(`${year}년 ${month}월 ${day}일`);
console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));




