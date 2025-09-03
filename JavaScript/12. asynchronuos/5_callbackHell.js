/**
 * 단계적으로 비동기 처리 함수를 실행하는 경우
 * - 첫번째 호출 함수 결과 --> 두번째 함수 인자 
 * ...
 */
function step1(initNo, callback) {
    let result1 = initNo + 1;
    callback(result1);
}
function step2(initNo, callback) {
    let result2 = initNo + 1;
    callback(result2);
}
function step3(initNo, callback) {
    let result3 = initNo + 1;
    callback(result3);
}

step1(0, (result1) => {
    console.log(`result1 => ${result1}`);    
    step2(result1, (result2)=> {
        console.log(`result2 => ${result2}`);
        step3(result2, (result3)=> {
            console.log(`result3 => ${result3}`);
        })
    });
});
