import { useState } from 'react';

export function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const initForm = {
        id:"", 
        password:""
    };
    const [form, setForm] = useState(initForm);

    const handleSubmit = () => {
        
    }
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleInput = (event) => {
        // console.log("id--->>", event.target.value);
        setId(event.target.value);
    }

    console.log(id, password);
    

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
                                onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChangeForm} />
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset">다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}