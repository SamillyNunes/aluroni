import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/menu' element={<Cardapio/>} />
            </Routes>
        </BrowserRouter>
    );
}