/**
 * 로그인 사용자 클래스 정의
 */
class User {
    #id;
    #pass;
    constructor(id, pass) {
        this.#id = id;
        this.#pass = pass;
    }
    getId = () => this.#id;
    getPass = () => this.#pass;

    setId = (id) => this.#id = id;
    setPass = (pass) => this.#pass = pass;

    display = () => console.log(this.#id, this.#pass);    
}

/**
 * 로그인 체크 함수 정의
 */
function loginCheck() {
    // console.log(`로그인 이벤트 호출!!`);
    const id = document.querySelector('#id');
    const pass = document.querySelector('#pass');

    //입력폼에 대한 유효성 체크(validation check) 반드시 진행!!
    if(id.value === '') {
        alert('아이디를 입력해주세요');
        id.focus();
    } else if(pass.value === '') {
        alert('패스워드를 입력해주세요');
        pass.focus();
    } else {
        let user = new User(id.value, pass.value);
        user.display();

        //아이디, 패스워드를 서버에 전송!!! : user 객체 전송
        const did = 'test';
        const dpass = '1234';

        if(did === user.getId() && dpass === user.getPass()) {
            alert('로그인 성공!!!');
        } else {
            alert('로그인 실패!!');
            id.value = '';
            pass.value = '';
            id.focus();
        }
    }   
    
}