
export function Menu({href, style, name, click}) {
    return (
        <a  href={href} 
            className={style}
            onClick={()=>{ click(name)}}>{name}</a>
    );
}