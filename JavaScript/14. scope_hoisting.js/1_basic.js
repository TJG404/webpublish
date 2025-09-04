/**
 * scope(스코프:범위): 메모리 관리, 이름 충돌 방지, 블록 처리 단위 개념 
 * block(블록 : {})
 * {  블록 단위 실행 : 제어문(for, switch~case, while...)} 
 */
{
    //전역변수, Global variable
    //파일전체 어느곳에서든 호출 가능
    //변수의 초기화는 자동
    let a = 10;
    let b = 20;
    console.log(a, b);

    {
        let aa = 100;  //로컬변수, 지역변수
        let bb = 200;
        console.log(`aa, bb -> `, aa, bb);
        console.log(`a, b -> `, a, b);        
    }
    
    // console.log(`aa, bb -> `, aa, bb); 
    // 로컬변수는 해당 스코프에서만 호출 가능

    let numbers = [1, 2, 3, 4, 5];
    for(const number of numbers) {
        console.log(number);        
    }
    // console.log(number);      

}