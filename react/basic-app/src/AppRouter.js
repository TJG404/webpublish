import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout.jsx';
import { Login } from './components/form/Login.jsx';
import { Signup } from './components/form/Signup.jsx';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Layout/>}>
                        <Route path="/login"  element={<Login/>} />
                        <Route path="/signup"  element={<Signup/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

