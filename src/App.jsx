import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.sectionContent}>
          <div className={styles.textContent}>
            <h1>Olá, sou Pablo Rafael</h1>
            <p>
              Com uma sólida formação em JavaScript e especialização em React,
              trago uma abordagem abrangente e inovadora ao desenvolvimento web,
              atuando com maestria tanto no front-end quanto no back-end. Minha
              habilidade em criar interfaces dinâmicas e intuitivas se alia à
              competência em gerenciar servidores e bancos de dados, garantindo
              uma experiência completa e otimizada para o usuário.
            </p>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
