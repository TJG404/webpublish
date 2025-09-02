/**
 * Set : 다양한 데이터 타입 저장
 * - add() : 데이터 추가
 * - has() : 데이터 확인
 * - delete() : 데이터 삭제
 * - 중복된 데이터는 자동 필터링으로 하나만 저장
 */

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');
mySet.add({name: '홍길동'});
mySet.add([1,2,3,4,5]);
mySet.add(100);

console.log(mySet);

//mySet 데이터 출력
console.clear();
for(const value of mySet) {
    console.log(value);    
}

//mySet 데이터 확인
console.log(mySet.has(100));
console.log(mySet.has('홍길동'));

//mySet 데이터 삭제
if(mySet.has(100)) {
    mySet.delete(100);
    console.log('삭제완료!!');    
}
console.log(mySet);


