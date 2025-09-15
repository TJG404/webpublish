import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div>
            <header>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    );
}