import { Login } from './components/form/Login.jsx';
import { Login2} from './components/form/Login2.jsx';
import { UserInfo } from './components/form/UserInfo.jsx';
import { UserInfo2 } from './components/form/UserInfo2.jsx';

export default function App() {
    return (
        <>
            <Login />
            <hr/>
            <Login2 />
            {/* <hr/>
            <UserInfo />
            <hr/>
            <UserInfo2 /> */}
        </>
    );
}