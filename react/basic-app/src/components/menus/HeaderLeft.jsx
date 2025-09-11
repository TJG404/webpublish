import { Menu } from "../commons/Menu.jsx";
import { useState, useEffect } from 'react';
import { fetchData } from '../../util/commonData.js';

export function HeaderLeft() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetch = async() => {
            const data = await fetchData("/data/menus.json");
            setMenus(data.headerLeft);
        }
        fetch();
    }, []);

    return (
        <ul className="menu-list">
            {menus.map(menu => 
                <li>
                    <Menu href={menu.href}
                        name={menu.name}
                        style={menu.style}
                        isIcon={menu.isIcon}
                        icon={menu.icon}  />
                </li>
            )}
        </ul>
    );
}