import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";

export function Header({cartCount}) {
    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className='header-icons'/>
                        <span className='header-icons-cart'>{cartCount}</span>
                    </Link>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>                   
                </nav>
            </div>
        </div>
    );
}