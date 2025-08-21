/**
 * 객체를 생성하는 함수 : 생성자 함수
 * 일반함수를 정의하는 형식으로 사용해야 함!!
 * 
 * 객체의 메소드 정의
 * : 함수를 정의하여 메소드 구현!!
 */
const friuts = {
    //field
    name: 'apple',
    emoji: '🍎',

    //method
    getName: function() { return this.name; },
    getEmoji: function() { return this.emoji; },
    display: function() {
        console.log(this.name, this.emoji);        
    }
}
console.log(friuts);
console.log(friuts.display);
friuts.display();
console.log(friuts.getName());
console.log(friuts.getEmoji);

//생성자 함수
function Apple (name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);        
    }
}

let redApple = new Apple('사과', '🍎');
console.log(redApple);
redApple.display();


