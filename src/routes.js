import Layout from 'components/Layout';
import NavMenu from 'components/NavMenu';
import About from 'pages/About';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <NavMenu />

                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home/>} />
                        <Route path='menu' element={<Cardapio />} />
                        <Route path='about' element={<About />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}