import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from 'components/NavMenu';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import DefaultLayout from 'components/DefaultLayout';
import About from 'pages/About';

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home/>}/>
            <Route path='cardapio' element={<Menu/>}/>
            <Route path='sobre' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}