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
        <div>
            <div style={{display:"flex", 
                        justifyContent:"space-between",
                        borderBottom: "1px solid #888",
                        padding: "20px"}}>
                <MenuList menus={menus.headerLeft}/>
                <Logo img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" 
                    alt="header-logo" w="200px" />
                <MenuList menus={menus.headerRight}/>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuList menus={menus.headerCenter}/>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuList menus={menus.footerTop}/>
            </div>
        </div>
    );
}