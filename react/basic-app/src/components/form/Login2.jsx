import { useState, useRef } from 'react';

export function Login2() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null)
    }
    const [form, setForm] = useState({id:'', pass:''});  //폼의 입력데이터 저장

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]:value});
    }

    const handleResetForm = () => {
        setForm({id:'', pass:''});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //브라우저(DOM객체) 이벤트 정지

        //validation check(유효성 체크)
        if(refs.idRef.current.value === "") {
            alert("아이디를 입력해주세요");
            refs.idRef.current.focus();
            return false;
        } else if(refs.passRef.current.value === "") {
            alert("패스워드를 입력해주세요");
            refs.passRef.current.focus();
            return false;
        } else {
            console.log("submit===>>", form);
        }
    }
    

    return (
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input  type="text" 
                                name="id"
                                value={form.id}
                                ref={refs.idRef}
                                onChange={handleChangeForm}></input>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input  type="password" 
                                name="pass"
                                value={form.pass}
                                ref={refs.passRef}
                                onChange={handleChangeForm}></input>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button type="button" 
                                onClick={handleResetForm}>Reset</button>
                    </li>
                </ul>
            </form>
        </>
    );
}