import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.content}>
            <p className={styles.descriptionText}>Full-Stack</p>
            <h1 className={styles.title}>
              Sou desenvolvedor web e transformo ideias em soluções web.
            </h1>
            <p className={styles.text}>
              Com uma sólida formação em JavaScript e especialização em React,
              trago uma abordagem abrangente e inovadora ao desenvolvimento web,
              atuando com maestria tanto no front-end quanto no back-end.
            </p>
            <div className={styles.buttons}>
              <button className={styles.buttonLeft}>Contrate-me</button>
              <button className={styles.buttonRight}>Projetos</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
