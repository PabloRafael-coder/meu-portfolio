import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <h2>
                Pablo
                <span>
                    Rafael-coder
                </span>
            </h2>
            <nav>
                <li className={styles.headerlist}>
                    <a href='#'>Home</a>
                    <a href='#'>Sobre</a>
                    <a href='#'>Projetos</a>
                    <a href='https://www.linkedin.com/in/pablo-rafael-1372a2279/'>Linkedin</a>
                </li>
            </nav>
            <a className={styles.headerLink} href='#'>Entre em contato</a>
        </header >
    )
}