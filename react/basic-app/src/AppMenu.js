import './css/Menu.css';
import { MenuList } from './components/menus/MenuList.jsx';
import { useState, useEffect } from 'react';
import { fetchData } from './util/commonData.js';
import { Logo } from './components/commons/Logo.jsx';

export default function App() {
    const [menus, setMenus] = useState({});

    useEffect(() => {
        const fetch = async() => {         
            const data = await fetchData("/data/menus.json");
            setMenus(data);
        }
        fetch();
    }, []);

    return (
        <div style={{display:"flex", 
                    justifyContent:"space-between",
                    borderBottom: "1px solid #888",
                    padding: "30px"}}>
            <MenuList menus={menus.headerLeft}/>
            <Logo img="/images/logoRed.png" alt="header-logo" w="120px" />
            <MenuList menus={menus.headerRight}/>
            {/* <MenuList menus="headerRight"/>
            <MenuList menus="headerCenter"/> */}
        </div>
    );
}