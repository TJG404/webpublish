import './css/Menu.css';
import { Menu } from './components/commons/Menu.jsx';
import { HeaderLeft } from './components/menus/HeaderLeft.jsx';

export default function App() {
    return (
        <>
            <HeaderLeft />
            <div style={{"display":"flex"}}>
                <Menu   href="#"
                        name="Menu#1"
                        style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}}
                        isIcon="true"
                        icon="❤"
                        />
                <Menu   href="#"
                        name="Menu#2"
                        style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}}
                        isIcon="false"
                        icon="❤"
                        />
            </div>
        </>
    );
}