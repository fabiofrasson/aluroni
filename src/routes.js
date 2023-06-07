import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardapio' element={<Menu />} />
      </Routes>
    </Router>
  );
}