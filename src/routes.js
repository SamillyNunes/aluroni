import NavMenu from 'components/NavMenu';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './Routes.module.scss';

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <NavMenu />
                <header className={styles.header}>
                    <div className={styles.header__text}>
                        A casa do código e da massa
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Cardapio />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}