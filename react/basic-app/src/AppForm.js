import { Login } from './components/form/Login.jsx';
import { UserInfo } from './components/form/UserInfo.jsx';
import { UserInfo2 } from './components/form/UserInfo2.jsx';

export default function App() {
    return (
        <>
            <Login />
            <hr/>
            <UserInfo />
            <hr/>
            <UserInfo2 />
        </>
    );
}