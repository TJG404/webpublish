
export function MyButton({name, type, style}) {  //props = {name:"회원가입"}
    return (
        <button type={type}
                className={style}
                >{name}</button>
    );
}