/**
 * while - 종료되는 조건을 알고 있는 경우
 * while(조건식) {
 *      실행문;
 * }
 */

//1 ~ 10까지 출력
//5까지 출력하고 종료
let i = 1;
while(i<=10) {
    if(i === 6) break;
    console.log(`i = ${i}`);   
    i++; 
}

//메뉴 선택
let flag = true;
let menu = 1;
while(flag) {
    console.log(`0:🍎, 1:🍏, 2:🍋`);
    if(menu === 0) {
        console.log('🍎');  
        flag = false;      
    } else if(menu === 1) {
        console.log('🍏');   
        flag = false;     
    } else if(menu === 2) {
        console.log('🍋');  
        flag = false;      
    }    
}