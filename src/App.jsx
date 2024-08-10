import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import minhaImagem from './assets/minha-imagem.png'
import { CardSkill } from './components/CardSkill';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';



function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
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
        <section className={styles.cardSection}>
          <h2>Minhas habilidades</h2>
          <p className={styles.textSection}>Busco novas experiências e estou pronto para ajudar a criar projetos
            incríveis. Posso criar layouts impressionantes para suas páginas.
          </p>
          <div className={styles.contentCard}>
            <CardSkill>
              <div className={styles.cardTitle}>
                <ManageAccountsOutlinedIcon color={'primary'} fontSize={'large'} />
                <h3>Interface do usuário</h3>
              </div>
              <p>
                Como desenvolvedor tenho um olhar atento para criar
                interfaces de usuário intuitivas e visualmente atraentes, sempre
                priorizando a experiência do usuário e a usabilidade.
              </p>
            </CardSkill>
            <CardSkill>
              <div className={styles.cardTitle}>
                <SettingsOutlinedIcon color={'primary'} fontSize={'large'} />
                <h3>Construção de API</h3>
              </div>
              <p>
                Tenho experiência na construção de soluções back-end,
                desenvolvendo APIs para aplicações modernas com
                escalabilidade e integração eficiente.
              </p>
            </CardSkill>
            <CardSkill>
              <div className={styles.cardTitle}>
                <Diversity3OutlinedIcon color={'primary'} fontSize={'large'} />
                <h3>Soft Skill</h3>
              </div>
              <p>
                Como desenvolvedor valorizo a colaboração em equipe e a comunicação clara,
                buscando criar um ambiente positivo e produtivo.
              </p>
            </CardSkill>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
