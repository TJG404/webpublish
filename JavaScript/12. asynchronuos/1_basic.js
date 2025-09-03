/**
 * V8 엔진 구조 숙지!!!
 * 동기식(Synchronuos) 
 * - 한 줄씩 순차적으로 실행하는 방식, 즉시 처리
 * - 실행 > call stack > 바로 처리(순차적 처리)
 * 
 * 비동기식(aSynchronuos) 
 * - 대량의 데이터 처리방식, 나중 처리
 * - 실행 > call stack > Web API, Backgroud 저장 > Task Queue 
 *  > (call stack 비워지면) Event Loop 저장된 task 하나씩 call stack 올려 실행
 * - setTimeout(), fetch(), DB 연동...
 * - DB 연동 시 순차적인 처리 필수(서버연결 > SQL전송 > 결과를 객체에 저장 ... )
 * - 비동기식 처리에서 순차적인 처리가 필요한 경우 : async, await 키워드 사용!!! 
 * - Promise라고 객체를 이용하여 callback 함수 호출을 진행함 
 */

//동기식
function a() {
    b();
    setTimeout(()=>{
        console.log(`바로 Task큐에 들어가요!!!`);        
    });
    console.log(`-------------> a`);    
}
function b() {    
    setTimeout(()=>{
        console.log(`1초후에 Task큐에 들어가요!!!`);        
    }, 1000);
    console.log(`-------------> b`);    
}
function c() {
    a();  //a() + return address(복귀주소)
    console.log(`-------------> c`);    
}

c();


