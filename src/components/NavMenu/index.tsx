import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <nav className={styles.menuBar}>
      <Logo/>
    </nav>
  );
}