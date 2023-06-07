import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Navigation from 'components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Routes.module.scss';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <header className={styles.header}>
          <div className={styles.header__text}>
            A casa do código e da massa
          </div>
        </header>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cardapio' element={<Menu />} />
        </Routes>
      </Router>
    </main>
  );
}