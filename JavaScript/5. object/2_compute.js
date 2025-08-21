import { setObject, getObject, updateObject, deleteObject } 
        from '../commons/util.js';

const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruits = {
    name: 'apple',
    emoji: '🍎'
}

setObject(person, 'address', '강남구');
let job = getObject(person, 'job');
updateObject(person, 'age', 32);
deleteObject(person, 'name');

console.log(person);

setObject(fruits, 'color', 'red');
let e = getObject(fruits, 'emoji');
updateObject(fruits, 'color', 'green');
deleteObject(fruits, 'emoji');

console.log(fruits, e);

