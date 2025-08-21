//사원클래스 정의
//사원번호(#), 사원명, 나이를 입력받아 객체 생성
class Employee {
    #empno;
    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    setEmpno = (empno) => { this.#empno = empno; }
    setName = (name) => { this.name = name; }
    setAge = (age) => { this.age = age; }

    getEmpno = () => this.#empno; 
    getName = () => this.name;
    getAge = () => this.age;

    display = () => {
        console.log(this.#empno, this.name, this.age);        
    }

    getObject = () => { 
        return {
            empno: this.#empno, 
            name: this.name, 
            age: this.age
        }
    }

}

let hong = new Employee('E0001', '홍길동', 20);
let park = new Employee('E0002', '박정민', 20);
hong.setAge(30);
console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());
hong.display();
console.log(hong.getObject());

let empList = [];
empList.push(hong.getObject());
empList.push(park.getObject());
console.log(empList);
console.log(`empList = ${empList}`);




