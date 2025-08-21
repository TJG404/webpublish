/**
 * static 상수, 메소드 정의 : 클래스 변수, 클래스 함수
 * static 키워드가 붙은 상수, 메소드는 호출 방식
 * - 클래스명.상수
 * - 클래스명.메소드 
 */
class Fruit {
    static MAX_SIZE = 100;

    constructor(name, emoji, color){
        this.name = name;
        this.emoji = emoji;
        this.color = color;
    }
    static getMaxSize = () => { return this.MAX_SIZE; }
    static create = (name, emoji, color) => {
        return new Fruit(name, emoji, color);
    }

    display = () => {
        console.log(this.name, this.emoji, this.color);        
    }
}

let apple = new Fruit('apple', '🍎', 'red');
let orange = Fruit.create('orange', '🍊', 'coral');
apple.display();
orange.display();
console.log(Fruit.getMaxSize());

