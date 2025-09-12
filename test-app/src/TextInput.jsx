
export function TextInput({type, name, value, msg, handleChange}) {
    return (
        <input 
            type={type}
            name={name}
            value={value}
            placeholder={msg}
            onChange={(e)=> {handleChange(e.target)}}
        />
    );
}