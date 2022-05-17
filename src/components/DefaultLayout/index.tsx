import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './DefaultLayout.module.scss';

export default function DefaultLayout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}
