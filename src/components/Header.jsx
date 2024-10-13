import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../assets/thunder.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logoHeader} src={logo} alt="" />
      <nav className={styles.headerNav}>
        <li className={styles.headerNavList}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.desktopOnly} ${styles.active}`
                : `${styles.desktopOnly}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? `${styles.desktopOnly} ${styles.active}`
                : `${styles.desktopOnly}`
            }
          >
            Projetos
          </NavLink>
          <NavLink
            to="https://github.com/PabloRafael-coder"
            className={styles.desktopOnly}
          >
            GitHub
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/pablo-rafael-1372a2279/"
            className={styles.desktopOnly}
          >
            Linkedin
          </NavLink>
          <button href="#" className={styles.headerButton}>
            Entre em contato
          </button>
        </li>
      </nav>
    </header>
  );
}
