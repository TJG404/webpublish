/**
 * return : 함수의 실행결과 반환
 * 반환결과 1개 값 --> 변수
 * 반환결과 1개 이상 --> 객체
 */
function add(a, b) {
    return a + b;
}
let result = add(100, 200);
console.log(add(1,2));
console.log(`result = ${result}`);

//이름과 나이를 파라미터로 전송하여 객체를 생성하는 함수
function createObj(name, age) {
    return {
        name: name,
        age: age
    };
}
console.clear();
console.log(createObj('홍길동', 30));

let obj = createObj('이순신', 30);
console.log(obj);
console.log(obj.name);
console.log(obj.age);

let objList = [
    createObj('홍길동', 10),
    createObj('이순신', 20),
    createObj('김유신', 30),
];
console.clear();
console.log(objList);

for(let i=0; i<objList.length; i++) {
    let obj = objList[i]; 
    console.log(`${obj.name}, ${obj.age}`);
}

//두 수를 입력받아, 곱한 결과를 반환하는 함수
//두 수는 0보다 커야 함!!
console.clear();
function multi(a, b) {
    let result = undefined;
    if(a>0 && b>0) {
       result = a * b; 
    }
    return result;
}
console.log(`result = ${multi(2, 9)}`);



