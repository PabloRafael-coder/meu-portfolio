import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <p>PabloRafael<span>-coder</span></p>
      <nav className={styles.headerNav}>
        <li className={styles.headerNavList}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.desktopOnly} ${styles.linkNav} ${styles.active}`
                : `${styles.desktopOnly} ${styles.linkNav}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? `${styles.desktopOnly} ${styles.linkNav} ${styles.active}`
                : `${styles.desktopOnly} ${styles.linkNav}`
            }
          >
            Projetos
          </NavLink>
          <NavLink
            to="https://github.com/PabloRafael-coder"
            className={`${styles.desktopOnly} ${styles.desktopOnly} ${styles.linkNav}`}
          >
            GitHub
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/pablo-rafael-1372a2279/"
            className={`${styles.desktopOnly} ${styles.linkNav}`}
          >
            Linkedin
          </NavLink>
          <NavLink to="/contact" className={styles.headerButton}>
            Entre em contato
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
