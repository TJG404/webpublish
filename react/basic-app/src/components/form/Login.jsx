import { useState, useRef } from 'react';

export function Login() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {
        id:"", 
        password:""
    };
    const [form, setForm] = useState(initForm);

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }
   
    const handleFormReset = () => {  setForm(initForm);  }
    
  
    const handleSubmit = (event) => {
        event.preventDefault();

        if(idRef.current.value === "") {
            alert("아이디를 입력해주세요");
            idRef.current.focus();
        } else if(passwordRef.current.value === "") {
            alert("패스워드를 입력해주세요");
            passwordRef.current.focus();
        } else {
            console.log('서버연동 전송데이터 --> ', form);        
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form   name="login-form" 
                    onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input  type="text"  
                                name="id"
                                value={form.id}
                                ref={idRef}
                                placeholder="아이디를 입력해주세요"
                                onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password"
                                name="password"
                                value={form.password}
                                ref={passwordRef}
                                placeholder="패스워드를 입력해주세요"
                                onChange={handleChangeForm} />
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset"
                                onClick={handleFormReset}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}