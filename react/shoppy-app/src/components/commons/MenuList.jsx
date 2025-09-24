import { Menu } from "./Menu.jsx";
import { useState } from 'react';

export function MenuList({menus}) {
    const [active, setActive] = useState("전체");
    const handleClick = (name) => { 
        console.log('name-->', name);        
        setActive(name); 
    }
    return (
        <ul className="menu-list">
            {!menus || menus.map(menu => 
                <li className="menu-list-item">
                    <Menu href={menu.href}
                        name={menu.name}                        
                        isIcon={menu.isIcon}
                        icon={menu.icon}  
                        style={active === menu.name ? 
                            "support-active" : "" }
                        handleClick={handleClick}
                        />
                    {menu.isBorder? <span className="menu-list-item-border"></span> : ""}
                </li>
            )}         
        </ul>

    );
}