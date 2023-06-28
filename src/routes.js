import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />} />
            <Route path='sobre' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='prato/:id' element={<Dish />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}