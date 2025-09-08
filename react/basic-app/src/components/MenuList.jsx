import { Menu } from './Menu.jsx';

/**
 * 메뉴 리스트
 */
export function MenuList({menus}) {  //menus=[{menus}]
    return (
        <ul className="menu-list">
            { menus.map((menu)=>                 
            <li>
                <Menu   title={menu.title} 
                        color={menu.color} 
                        bg={menu.bg} 
                        href={menu.href} />
            </li>
            ) }
        </ul>
    );
}