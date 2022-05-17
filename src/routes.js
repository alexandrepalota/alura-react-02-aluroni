import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from 'components/NavMenu';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import DefaultLayout from 'components/DefaultLayout';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />} />
            <Route path='sobre' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}