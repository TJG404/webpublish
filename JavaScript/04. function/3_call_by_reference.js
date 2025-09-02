/**
 * 함수는 Object이고, Heap에 저장된다.
 * 일반함수 function으로 선언되는 경우에는, 
 * 호이스팅되어 맨먼저 힙에 초기화 된다.
 */
function add(a, b) {
    console.log(`sum = ${a + b}`);    
}
let sum = add;  //call by reference

console.log(add);
console.log(sum);
add(1,2);
sum(1,2);
