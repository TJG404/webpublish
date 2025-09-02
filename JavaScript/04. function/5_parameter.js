/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Parameter(래스트 파라미터) : 여러 개의 파라미터를 전송시 사용
 * Spread operator(스프레드 연산자 : ...)
 */

console.log(add(1, 2));
console.log(add(1, 2, 3, 6, 2, 5, 9));
console.log(add(1, 2, 3, 6, 2, 5, 9, 10, 45, 11, 23));

function add(... numbers) {  
    // let sum = 0;
    // for(let i=0; i<numbers.length; i++) {
    //     sum += numbers[i];
    // }

    // let sum = numbers.reduce((acc, cur) => { return acc + cur });
    let sum = numbers.reduce((acc, cur) => acc + cur);

    return sum;
}

console.clear();
console.log(add2(1, 2, 3));
console.log(add2(1, 2, 3, 6, 2, 5, 9));
console.log(add2(1, 2, 3, 6, 2, 5, 9, 10, 45, 11, 23));

function add2(a, b, ...numbers) {
    // let c = numbers.reduce((acc, cur) => acc + cur);
    let sum = a + b + numbers.reduce((acc, cur) => acc + cur);
    return sum;
}


