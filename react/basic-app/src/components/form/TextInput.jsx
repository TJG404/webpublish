
export function TextInput({item, value, handleChange}) {
    const { type, name, msg } = item; 

    return (
        <input  type={type} 
                name={name} 
                value={value}
                placeholder={msg} 
                onChange={(e)=>{ handleChange(e); }}
                />
    );
}