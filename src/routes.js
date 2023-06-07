import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}