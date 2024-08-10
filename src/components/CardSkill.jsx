import styles from './CardSkill.module.css'

export function CardSkill({ children }) {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}