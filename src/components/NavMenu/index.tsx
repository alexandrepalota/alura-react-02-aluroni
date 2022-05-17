import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './NavMenu.module.scss';

export default function NavMenu() {
  const routes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];
  return (
    <nav className={styles.menuBar}>
      <Logo />
      <ul className={styles.menuBar__list}>
        {routes.map((item, index) => (
          <li key={index} className={styles.menuBar__link}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
