import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';
import About from 'pages/About';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />} />
            <Route path='sobre' element={<About />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}