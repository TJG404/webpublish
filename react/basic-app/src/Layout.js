import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <Link to="/" style={{'padding':'20px'}}>Home</Link>
            <Link to="/signup" style={{'padding':'20px'}}>Signup</Link>
            <div>
                <Outlet />
            </div>
        </div>         
    );
}