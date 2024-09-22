
import { Header } from "./components/Header"
import { CardSkill } from './components/CardSkills';
import { CardTools } from './components/CardTools';

import minhaImagem from './assets/minha-imagem.png';
import javascript from './assets/JavaScript.svg';
import react from './assets/React-Dark.svg';
import node from './assets/NodeJS-Dark.svg';
import mongodb from './assets/MongoDB.svg';
import postgres from './assets/PostgreSQL-Dark.svg';
import git from './assets/Git.svg';
import github from './assets/Github-Dark.svg';



import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import styles from './App.module.css'
import './global.css'


function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.sectionProfile}>
          <div>
            <img className={styles.avatar} src={minhaImagem} />
            <p className={styles.descriptionSkill}>Developer Web</p>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Sou desenvolvedor web e transformo ideias em soluções web.
            </h1>
            <p className={styles.text}>
              Com uma base sólida em JavaScript e experiência em React, trago uma
              abordagem criativa e dedicada ao desenvolvimento web, contribuindo
              para projetos tanto no front-end quanto no back-end.
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
          <h2>Minhas Competências</h2>
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
                Como desenvolvedor busco criar interfaces de usuário intuitivas
                e visualmente atraentes, sempre priorizando a experiência do
                usuário e a usabilidade.
              </p>
            </CardSkill>
            <CardSkill>
              <div className={styles.cardTitle}>
                <SettingsOutlinedIcon color={'primary'} fontSize={'large'} />
                <h3>Construção de API</h3>
              </div>
              <p>
                Tenho experiência no desenvolvimento de APIs para aplicações
                modernas com escalabilidade e integração eficiente.
              </p>
            </CardSkill>
            <CardSkill>
              <div className={styles.cardTitle}>
                <Diversity3OutlinedIcon color={'primary'} fontSize={'large'} />
                <h3>Soft Skill</h3>
              </div>
              <p>
                Valorizo a colaboração em equipe e a comunicação clara,
                sempre buscando criar um ambiente positivo e produtivo.
              </p>
            </CardSkill>
          </div>
        </section>
        <section className={styles.cardToolsSection}>
          <h2>Minhas habilidades</h2>
          <div className={styles.cardToolsContent}>
            <h3>Minhas ferramentas:</h3>
            <CardTools image={git} text="Git" />
            <CardTools image={github} text="GitHub" />
            <CardTools image={javascript} text="JavaScript" />
            <CardTools image={react} text="React" />
            <CardTools image={node} text="Node" />
            <CardTools image={mongodb} text="MongoDB" />
            <CardTools image={postgres} text="Postgres" />
          </div>
        </section>
        <footer className={styles.footerContent}>
          <h2>Vamos conversar?</h2>
          <a href="">pabloofael@gmail.com</a>
          <p>Copyright 2024 - Pablo Rafael</p>
        </footer>
      </main>
    </>
  )
}

export default App
