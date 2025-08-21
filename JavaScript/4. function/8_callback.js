/**
 * callback(콜백함수) : 함수의 파라미터로 입력되는 익명함수 
 */
const job = (a, b, callback) => {  //a=1, b=2, callback = print 함수 주소
    callback(a, b);
}

const print = (a, b) => {
    console.log(a, b); 
}

job(1, 2, print);  //동기식


//setTimeout 함수 호출 - 비동기식 
//setTimeout은 비동기식 처리를 하므로, 백그라운드에 저장된후 
//이벤트 루프를 통해 호출되어 콜스택에서 처리될 때 자신이 포함한
//콜백함수를 실행한다.
// setTimeout(callback(처리할 함수형식), delay);
// setTimeout(print(1,2), 1000);
console.clear();

console.log(`동기식 처리-----------> 1`);
console.log(`동기식 처리-----------> 2`);

setTimeout(()=>{
    console.log(`setTimeout 호출(비동기) ----> #1`);    
}, 3000);

console.log(`동기식 처리-----------> 3`);

setTimeout(()=>{
    console.log(`setTimeout 호출(비동기) ----> #2`);    
}, 1000);

console.log(`동기식 처리-----------> 4`);





