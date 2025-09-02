/**
 * String 문자열 클래스 메소드
 * - split(), slice, charAt()...
 */
let name = "홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name == sname);
console.log(name == sname.valueOf());

let str = "Hello~ JavaScript World!!";
console.log(str.length);
console.log(str.charAt(5));
console.log("Welcome to " + str);
console.log("Welcome to ".concat(str));  //문자열 결합
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//문자열 추출
console.log(str.substring(0, 2));  //종료주소 -1까지 출력
console.log(str.substring(4, 10));  //종료주소 -1까지 출력
console.log(str.slice(0, 2));  //종료주소 -1까지 출력
console.log(str.slice(4));  //주소에 값 이후 데이터 출력

//문자열 공백 삭제
console.clear();
let text = '            Hello~ JavaScript!!            ';
console.log(text.trim());

//문자열을 구분자를 이용하여 배열객체로 생성
let fruits = '사과, 레몬, 토마토, 오렌지, 키위';
let flist = fruits.split(',');
console.log(fruits);
console.log(flist);
console.log(flist[2]);

if(flist[1].trim() === '레몬') console.log(flist[1]);
else console.log(flist[0]);













