import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const routes = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles.navigation__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.navigation__link}>
            <a href={route.to}>
              {route.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}