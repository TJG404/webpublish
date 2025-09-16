import { Link } from 'react-router-dom';
/**
 * 사이트 헤더 화면 출력 컴포넌트
 */
export function Header() {
    return (
        <header style={{backgroundColor:"green"}}>
            {/* {children} */}
                <Link to="/" style={{padding:"10px", color:"white"}}>Home</Link>
                <Link to="/login" style={{padding:"10px", color:"white"}}>로그인</Link>
                <Link to="/signup" style={{padding:"10px", color:"white"}}>회원가입</Link>
                <Link to="/about" style={{padding:"10px", color:"white"}}>About</Link>
                <Link to="/support" style={{padding:"10px", color:"white"}}>Support</Link>
        </header>
    );
}