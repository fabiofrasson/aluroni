import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Carte.module.scss';

export default function Carte() {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
}