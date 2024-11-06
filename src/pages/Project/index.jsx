import { CardProject } from '../../components/CardProject';
import { ProjectContainer, ProjectContent } from './styles';
import todo from '../../assets/todo.svg';
import login from '../../assets/tela-login.png';

const myProjects = [
  {
    id: 1,
    title: 'To-Do List App',
    text: `O projeto "To-Do List" é uma aplicação web desenvolvida para 
    auxiliar na organização de tarefas diárias. Com uma interface simples e 
    intuitiva, os usuários podem adicionar, editar e excluir tarefas de 
    maneira eficiente. O app permite marcar tarefas como concluídas, 
    além de oferecer uma visualização clara do progresso.`,
    image: todo,
  },
];

export function Project() {
  return (
    <ProjectContainer>
      <h1>Meus Projetos</h1>
      <p>
        Aqui você encontra uma coleção dos trabalhos que desenvolvi ao longo da
        minha jornada como desenvolvedor. Cada projeto reflete o meu
        crescimento, dedicação e paixão por criar soluções modernas e eficientes
        .
      </p>
      <ProjectContent>
        {myProjects.map((project) => {
          return <CardProject key={project.id} projectProps={project} />;
        })}
      </ProjectContent>
    </ProjectContainer>
  );
}
