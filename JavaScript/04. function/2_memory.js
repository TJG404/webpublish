/**
 * 함수 생성 및 호출
 */
import { toNumber } from '../commons/util.js';

add(100, 200);
add('100', '200');

function add(num1, num2) {
    let obj = toNumber(num1, num2);
    console.log(`sum = ${obj.num1 + obj.num2}`);    
}

//Arrow function 
const min = (num1, num2) => {
    let obj = toNumber(num1, num2);
    if(obj.num1 > obj.num2) {
        console.log(`min = ${obj.num1 - obj.num2}`);        
    } else {
        console.log(`값이 올바르지 않습니다.~`);                
    }
}

min(200, 100);
min('200', '100');