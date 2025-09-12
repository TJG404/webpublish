import { useState } from 'react';
import { TextInput } from './TextInput.jsx';

export function Login() {
    const [formData, setFormData] = useState({id:'', pass:''});
    const handleChange = (e) => {
        const {name, value} = e;
        console.log('e--> ',name, value);
        setFormData({...formData, [name]:value});
        
    }
    console.log(formData);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.id === "") {
            alert("아이디를 입력");
            
        }
    }

    const forms = ['id', 'pass'];
    const type = ['text', 'password'];

    return (
        <>
        <form onSubmit={handleSubmit}>
        {forms.map((a, index) => 
            <TextInput 
            type={type[index]}
            name={a}
            value={formData[a]}
            msg={a + "입력"}
            handleChange={handleChange}
            />
        )}
        </form>
        <button type="submit">전송</button>
        </>
    );
}