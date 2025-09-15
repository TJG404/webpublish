import { useState, useRef } from 'react';
import { validateLoginCheck } from '../../util/validate.js';

export function Login2() {
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        msgIdRef: useRef(null),
        msgPassRef: useRef(null)
    }
    const [form, setForm] = useState({id:'', pass:''});  //폼의 입력데이터 저장
    const [msg, setMsg] = useState({id:'', pass:''});

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]:value});
        // refs.msgIdRef.current.innerText = "";
        // refs.msgPassRef.current.innerText = "";
        setMsg({id:'', pass:''});
    }

    const handleResetForm = () => {
        setForm({id:'', pass:''});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //브라우저(DOM객체) 이벤트 정지

        if(validateLoginCheck(refs, setMsg)) {
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
                        <span ref={refs.msgIdRef}>{msg.id}</span>                                
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input  type="password" 
                                name="pass"
                                value={form.pass}
                                ref={refs.passRef}
                                onChange={handleChangeForm}></input>
                        <span ref={refs.msgPassRef}>{msg.pass}</span>  
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