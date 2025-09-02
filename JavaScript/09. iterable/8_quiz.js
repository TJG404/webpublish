// 중복된 배열을 입력받아, 중복을 제거한 후 출력하는 함수 작성
function filter(array) {
    return new Set(array);
}

let result1 = filter([1, 2, 1, 2, 3, 4, 5, 6]);
let result2 = filter(['홍길동', '이순신', '홍길동', '김유신']);

console.log(result1);
console.log(result2);
for(const number of result1) console.log(number); 
for(const name of result2) console.log(name); 


//구조 분해 할당
console.clear();
const getObject = () => {
    return {
        name: '홍길동',
        address: '서울시 강남구',
        job: '개발자'
    };
}
const getObject2 = () => {
    return [1, 2, 3];
}

let { name, address, job }  = getObject();
let [ n1, n2, n3 ] = getObject2();

console.log(name, address, job);
console.log(n1, n2, n3);

//textList를 입력받아, 3글자 이상의 text이면 새로운 배열 객체를 생성하여 반환
function textFilter(array) {
    //filter 메소드는 조건이 true인 경우에만 요소를 반환
    return array.filter((text) => text.length >= 3); 
}
//textList를 입력받아, 3글자 이상이 아닌 text이면 새로운 배열 객체를 생성하여 반환
function textFilter2(array) {
    //filter 메소드는 조건이 false인 경우에만 요소를 반환
    return array.filter((text) => !(text.length >= 3)); 
}

let result = textFilter(['javascript', 'java', 'css', 'ab', 'html']);
let result22 = textFilter2(['javascript', 'java', 'css', 'ab', 'html']);
console.log(result);
console.log(result22);


