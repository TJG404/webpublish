/**
 * 학생, 교수, 학부모, 직원 폼에 따른 클래스 정의 및 생성
 * - 공통적인 입력 값 성명, 나이, 주소는 멤버라는 부모 클래스로 정의
 * - 학생, 교수, 학부모, 직원 클래스의 멤버 클래스의 자식으로 정의
 */

//멤버 클래스 정의
class Member {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName = () => this.name;
    getAge = () => this.age;
    getAddress = () => this.address;

    setName = (name) => this.name = name;
    setAge = (age) => this.age = age;
    setAddress = (address) => this.address = address;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress());    
}

//학생 클래스 정의
class Student extends Member {
    constructor(name, age, address, sno) {
        super(name, age, address);
        this.sno = sno;
    }
    getSno = () => this.sno;
    setSno = (sno) => this.sno = sno;
}

//교수 클래스 정의
class Professor extends Member {
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.subject = subject;
    }
    getSubject = () => this.subject;
    setSubject = (subject) => this.subject = subject;
}

//학부모 클래스 정의
class Parent extends Member {
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.cname = cname;
    }
    getCname = () => this.cname;
    setCname = (cname) => this.cname = cname;
}

//직원 클래스 정의
class Employee extends Member {
    constructor(name, age, address, department) {
        super(name, age, address);
        this.department = department;
    }
    getDepartment = () => this.department;
    setDepartment = (department) => this.department = department;
}

/**
 * Signup 버튼 이벤트 처리 함수 : signupCheck()
 */
function signupCheck() {
    let type = document.querySelector('input[type=radio]:checked').value;
    
    
    switch(parseInt(type)) {
        case 1:
            console.log('학생');
            break;
        case 2:
            console.log('교수');
            break;
        case 3:
            console.log('학부모');
            break;
        case 4:
            console.log('직원');
            break;
    }
    
}



/**
 * 라디오 버튼 이벤트 처리 함수 정의 : display(타입);
 */
function display(type) {
    //#student block - display: block, 나머지는 display:none
    document.querySelector('#student').style.display = "none";
    document.querySelector('#professor').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";

    if(type === '1') {
        document.querySelector('#student').style.display = "block";
    } else if(type === '2') {
        document.querySelector('#professor').style.display = "block";
    } else if(type === '3') {
        document.querySelector('#parent').style.display = "block";
    } else if(type == '4') {
        document.querySelector('#employee').style.display = "block";
    }    
}