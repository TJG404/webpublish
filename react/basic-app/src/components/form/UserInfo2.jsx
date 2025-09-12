import { TextInput } from './TextInput.jsx';
import { useState, useRef } from 'react';

export function UserInfo2() {
    const forms = [
        { "label":"이름", "type":"text", "name":"name", "msg":"이름을 입력해주세요"},
        { "label":"나이", "type":"text", "name":"age", "msg":"나이를 입력해주세요"},
        { "label":"주소", "type":"text", "name":"address", "msg":"주소를 입력해주세요"},
        { "label":"이메일", "type":"text", "name":"email", "msg":"이메일을 입력해주세요"},
        { "label":"취미", "type":"text", "name":"hobby", "msg":"취미를 입력해주세요"},
    ];
    const [formData, setFormData] = useState({name:"", age:"", address:"", 
                                                email:"", hobby:""});
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('서버전송----> ', formData);            
    }
    

    return (
        <>
            <h1>UserInfo2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {!forms || forms.map(item => 
                        <li>
                            <label>{item.label}</label>
                            <TextInput  item={item}
                                        value={formData[item.name]}
                                        handleChange={handleChangeForm}
                                        />
                        </li>   
                    )}
                    <li><button type="submit">전송</button></li>
                </ul>
            </form>
        </>
    );
}