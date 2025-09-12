import { useState, useRef } from 'react';

export function UserInfo() {
    const refs = {
        nameRef: useRef(null),
        ageRef: useRef(null),
        addressRef: useRef(null)
    };
    const initForm = {name:'', age:'', address:''}
    const [formData, setFormData] = useState(initForm);

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(refs.nameRef.current.value === "") {
            alert("이름을 입력해주세요");
            refs.nameRef.current.focus();
        } else if(refs.ageRef.current.value === "") {
            alert("나이를 입력해주세요");
            refs.ageRef.current.focus();
        } else if(refs.addressRef.current.value === "") {
            alert("주소를 입력해주세요");
            refs.addressRef.current.focus();
        } else {
            console.log('formData --> ', formData);        
        }
    }

    return (
        <>
            <h1>UserInfo</h1>
            <form name="userInfo" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input  type="text" 
                                name="name"
                                value={formData.name}
                                ref={refs.nameRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>나이</label>
                        <input  type="text" 
                                name="age"
                                value={formData.age}
                                ref={refs.ageRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>주소</label>
                        <input  type="text" 
                                name="address"
                                value={formData.address}
                                ref={refs.addressRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button">다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}