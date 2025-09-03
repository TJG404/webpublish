/**
 * 함수에서 정의되는 함수, 무기명(anonymous) 함수
 */

//setTimeout 함수를 포함하고 있는 runDelay 함수 정의
function runDelay(callback, seconds) {
    setTimeout(callback, seconds);
}

runDelay(() => console.log(`1초후 task queue 추가! --> 1`), 3000);
runDelay(function() { console.log(`바로 추가 --> 2`)});    
runDelay(() => console.log(`1초후 task queue 추가! --> 3`), 1000);

console.log(`-- 프로그램 종료 --`);
