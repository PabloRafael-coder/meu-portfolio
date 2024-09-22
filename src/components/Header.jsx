import styles from './Header.module.css'
import logo from '../assets/thunder.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logoHeader} src={logo} alt="" />
            <nav className={styles.headerNav}>
                <li className={styles.headerNavList}>
                    <a href='#' className={styles.desktopOnly}>Home</a>
                    <a href='#' className={styles.desktopOnly}>Projetos</a>
                    <a href='https://github.com/PabloRafael-coder' className={styles.desktopOnly}>GitHub</a>
                    <a href='https://www.linkedin.com/in/pablo-rafael-1372a2279/' className={styles.desktopOnly}>Linkedin</a>
                    <button href='#' className={styles.headerButton}>Entre em contato</button>
                </li>
            </nav>
        </header >
    )
}