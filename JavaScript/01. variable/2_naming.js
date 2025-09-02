/**
 * 변수명 선언 규칙
 * - 라틴어(0~9, a~z, A~Z)
 * - 특수문자($, _ 사용가능, 이외의 특수문자는 사용불가)
 * - camel Case : ex) camelCase
 * - pascal Case : ex) PascalCase
 * - snake Case : ex) snake_case
 * 
 * ** 주의사항
 * - 숫자로 시작하면 X
 * - 예약어(키워드)는 사용 불가 
 * - 특수문자($, _) 사용 가능
 * - 이모지 사용 불가 
 */

//camel Case
let myName = "홍길동";
let myAge = 30;
console.log(myName);
console.log(myAge);

//snake Case
let my_name = "이순신";
let my_age = 20;
console.log(my_name);
console.log(my_age);

//저의 이름은 홍길동이고, 나이는 30살 입니다.
let output = "저의 이름은 " + myName + "이고, 나이는 " + myAge + "살 입니다.";
console.log(output);

//템플릿 리터럴(Template Literal: ``(백틱))
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}살 입니다.`;
console.log(output2);

//상수 정의 : 상수는 const 키워드로 정의하고, 재정의 불가!!
const AUDIO_DEVICE_START = 1;
const AUDIO_DEVICE_CONTINUE = 2;
const AUDIO_DEVICE_END = 3;

console.log(AUDIO_DEVICE_START);
console.log(AUDIO_DEVICE_CONTINUE);
console.log(AUDIO_DEVICE_END);





