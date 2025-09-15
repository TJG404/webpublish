import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './components/form/Signup.jsx';
import { Login } from './components/form/Login.jsx';
import { Layout } from './Layout.js';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>} >
                        <Route index element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        {/* <Route path='/login' element={<CgvLoginForm />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/support' element={<Support />} />
                        <Route path='/bestseller' element={<AppBestSeller />} /> */}
                    </Route>
                </Routes>            
            </BrowserRouter>
        </div>
    );
}