import Footer from 'components/Footer';
import Layout from 'components/Layout';
import NavMenu from 'components/NavMenu';
import About from 'pages/About';
import Cardapio from 'pages/Cardapio';
import Dish from 'pages/Dish';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>
            <BrowserRouter>
                <NavMenu />

                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home/>} />
                        <Route path='menu' element={<Cardapio />} />
                        <Route path='about' element={<About />} />
                        <Route path='dish/:id' element={<Dish />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </main>
    );
}