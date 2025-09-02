/**
 * 클래스 간의 상속관계를 표현
 * Animal 클래스를 상속 받아, Lion, Tiger, Dog... 자식 클래스를 정의
 */

//부모 클래스 정의 : Animal
// Animal 클래스 속성 : name, color, emoji
// Animal 클래스 메소드 : display, sleep, eat
class Animal {
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
    sleep = () => console.log(`${this.name} 이(가) 자요`);
    eat = () => console.log(`${this.name} 이(가) 먹어요`);  
}

//Animal 클래스의 자식인 Dog 클래스 정의
class Dog extends Animal {
    constructor(name, color, emoji, age) {
        super(name, color, emoji);
        this.age = age;
    }

    getAge = () => this.age;
    setAge = (age) => this.age = age;
}

//Animal 클래스의 자식인 Cat 클래스 정의
class Cat extends Animal {
    constructor(name, color, emoji, type) {
        super(name, color, emoji);
        this.type = type;
    }

    getType = () => this.type;
    setType = (type) => this.type = type;
}

let happy = new Dog('해피', '브라운', '🐶', 5);
let smile = new Cat('스마일', '흰색', '😺', '페르시안');

happy.display();
happy.sleep();
happy.eat();
console.log(`${happy.name} : age = ${happy.getAge()}`);

smile.display();
smile.eat();
smile.sleep();
console.log(`${smile.name} : type = ${smile.getType()} `);

