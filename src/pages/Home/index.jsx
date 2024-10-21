import { CardSkill } from '../../components/CardSkills';
import { CardTools } from '../../components/CardTools';


import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import minhaImagem from '../../assets/minha-imagem.png';
import javascript from '../../assets/JavaScript.svg';
import react from '../../assets/React-Dark.svg';
import node from '../../assets/NodeJS-Dark.svg';
import mongodb from '../../assets/MongoDB.svg';
import postgres from '../../assets/PostgreSQL-Dark.svg';
import git from '../../assets/Git.svg';
import github from '../../assets/Github-Dark.svg';
import pdf from '../../../arquivo.pdf';
import cs from '../../assets/cs.svg';


import '../../global.css';

import {
  ButtonsContainer,
  CardContainer,
  CardContent,
  ContentContainer,
  FooterContainer,
  HireButton,
  HomeContainer,
  ProfileContainer,
  ProjectButton,
  ProjectButtonContainer,
  SkillsContainer,
  TextCardContainer,
  ToolCardContents,
  UserProfile,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <UserProfile>
          <img src={minhaImagem} />
          <p>Software Developer</p>
        </UserProfile>
        <ContentContainer>
          <h1>Sou desenvolvedor web e transformo ideias em soluções web.</h1>
          <p>
            Com uma base sólida em JavaScript e experiência em React, trago uma
            abordagem criativa e dedicada ao desenvolvimento web, contribuindo
            para projetos tanto no front-end quanto no back-end.
          </p>
          <ButtonsContainer>
            <HireButton href={pdf} download="pdf">
              Download-CV
              </HireButton>
            <ProjectButtonContainer>
              <ProjectButton to="/project">
                Projetos
                <ArrowOutwardIcon />
              </ProjectButton>
            </ProjectButtonContainer>
          </ButtonsContainer>
        </ContentContainer>
      </ProfileContainer>
      <CardContainer>
        <h2>Minhas Competências</h2>
        <TextCardContainer>
          Busco novas experiências e estou pronto para ajudar a criar projetos
          incríveis. Posso criar layouts impressionantes para suas páginas.
        </TextCardContainer>
        <CardContent>
          <CardSkill>
            <div>
              <ManageAccountsOutlinedIcon
                color={'success'}
                fontSize={'large'}
              />
              <h3>Interface do usuário</h3>
            </div>
            <p>
              Como desenvolvedor busco criar interfaces de usuário intuitivas e
              visualmente atraentes, sempre priorizando a experiência do usuário
              e a usabilidade.
            </p>
          </CardSkill>
          <CardSkill>
            <div>
              <SettingsOutlinedIcon color={'success'} fontSize={'large'} />
              <h3>Construção de API</h3>
            </div>
            <p>
              Tenho experiência no desenvolvimento de APIs para aplicações
              modernas com escalabilidade e integração eficiente.
            </p>
          </CardSkill>
          <CardSkill>
            <div>
              <Diversity3OutlinedIcon color={'success'} fontSize={'large'} />
              <h3>Soft Skill</h3>
            </div>
            <p>
              Valorizo a colaboração em equipe e a comunicação clara, sempre
              buscando criar um ambiente positivo e produtivo.
            </p>
          </CardSkill>
        </CardContent>
      </CardContainer>
      <SkillsContainer>
        <h2>Minhas ferramentas</h2>
        <ToolCardContents>
          <CardTools image={git} text="Git" />
          <CardTools image={github} text="GitHub" />
          <CardTools image={javascript} text="JavaScript" />
          <CardTools image={react} text="React" />
          <CardTools image={node} text="Node" />
          <CardTools image={cs} text="C-Sharp" />
          <CardTools image={mongodb} text="MongoDB" />
          <CardTools image={postgres} text="Postgres" />
        </ToolCardContents>
      </SkillsContainer>
      <FooterContainer>
        <h2>Vamos conversar?</h2>
        <a href="">pabloofael@gmail.com</a>
      </FooterContainer>
    </HomeContainer>
  );
}
