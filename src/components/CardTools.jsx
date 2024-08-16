import styles from './CardTools.module.css'

export function CardTools({ image, text }) {
    return (
        <>
            <div className={styles.CardToolsContent}>
                <img src={image} />
                <p>{text}</p>
            </div>
        </>
    )
}