import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from 'components/NavMenu';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import styles from './Routes.module.scss';

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <NavMenu />
        <header className={styles.header}>
          <div className={styles.header__text}>A casa do código e da massa</div>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cardapio' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}