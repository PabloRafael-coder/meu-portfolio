import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import minhaImagem from './assets/minha-imagem.png'
import { CardSkill } from './components/CardSkill';


function App() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.sectionProfile}>
          <div>
            <img className={styles.avatar} src={minhaImagem} />
          </div>
          <div className={styles.content}>
            <p className={styles.descriptionSkill}>Full-Stack</p>
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
              <div className={styles.buttonRightStyle}>
                <button className={styles.buttonRight}>Projetos </button>
                <ArrowOutwardIcon />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionSkill}>
          <h2>Como posso te ajudar?</h2>
          <p>Busco novas experiências e estou pronto para ajudar a criar projetos
            incríveis. Posso criar layouts impressionantes para suas páginas.
          </p>
          <div className={styles.contentCardSkill}>
            <CardSkill />
            <CardSkill />
            <CardSkill />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
