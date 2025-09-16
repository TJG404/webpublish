import { Logo } from './header/Logo.jsx';
import { MenuList } from './header/MenuList.jsx';
import { ToggleButton } from './header/ToggleButton.jsx';

export function Header() {
    return (
        <header className="header">
            <Logo  img="/images/favicon.ico"  name="Judy" />
            <MenuList />    
            <ToggleButton />            
        </header>
    );
}
