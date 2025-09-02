/**
 * ✨✨✨✨✨
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 조건에 맞는 결과를 새로운 배열객체로 리턴
 * - 배열.filter(콜백함수);
 */
let objects = [
    {name: '홍길동', age: 10},
    {name: '이순신', age: 20},
    {name: '김유신', age: 30},
];

let fruits = new Array('🍎', '🍊', '🍋', '🍏', '🍑', '🍋');

//objects 요소 중 이름이 '이순신'인 객체(object literal)를 새로운 배열객체로 생성,  
//결과 --> [{name: '이순신', age: 20}]
let obj = objects.filter((item) => item.name === '이순신');  // []
console.log(obj);

//아이템 갯수를 리턴
const searchCount = (array, item) => {
    return array.filter(sitem => sitem === item).length;  //[]

    // let result = array.filter(sitem => sitem === item);  //[]
    // return result.length;
}

console.log(`count => ${searchCount(fruits, '🍋')}`);
