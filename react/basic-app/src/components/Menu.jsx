/**
 * 메뉴 컴포넌트
 */
export function Menu({title, color, bg, href}) {
    return (
        <a  href={href}
            className="menu"
            style={{color:color, background:bg}}>{title}</a>
    );
}