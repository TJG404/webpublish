/**
 * switch(조건:숫자, 문자) ~ case
 * switch(숫자,문자) {
 *      case 숫자,문자 :  실행문;    break;
 *      case 숫자,문자 :  실행문;    break;
 *      case 숫자,문자 :  실행문;    break;
 *      default: 실행문;
 * }
 */

//선택한 요일을 출력 : 0-월요일, 1-화요일, 2-수요일
let useage = `사용법 : 0-월요일, 1-화요일, 2-수요일`;
let day = 0;
let resultDay = undefined;
console.log(useage);
switch(day) {
    case 0: 
        resultDay = "월요일";
    break;
    case 1: 
        resultDay = "화요일";
    break;
    case 2: 
        resultDay = "수요일";
    break;
    default:
        console.log(useage);
}
console.log(`선택한 요일은 [${resultDay}] 입니다.`);




