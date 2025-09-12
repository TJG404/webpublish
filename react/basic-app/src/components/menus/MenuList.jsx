import { Menu } from "../commons/Menu.jsx";

export function MenuList({menus}) {

    return (
        <ul className="menu-list">
            {!menus || menus.map(menu => 
                <li className="menu-list-item">
                    <Menu href={menu.href}
                        name={menu.name}
                        style={menu.style}
                        isIcon={menu.isIcon}
                        icon={menu.icon}  />
                    {menu.isBorder? <span className="menu-list-item-border"></span> : ""}
                </li>
            )}         
        </ul>

    );
}