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
  {
    id: 2,
    title: 'E-commerce de Vendas de Hardware',
    text: `Este projeto é uma plataforma de e-commerce voltada para a venda de
    produtos de hardware. A aplicação foi desenvolvida com o objetivo de
    oferecer uma experiência de compra fluida e intuitiva, com recursos
    essenciais para o usuário final.`,
    image: todo,
  },
];

export function Project() {
  return (
    <ProjectContainer>
      <h1>Meus Projetos</h1>
      <ProjectContent>
        {myProjects.map((project) => {
          return <CardProject key={project.id} projectProps={project} />;
        })}
      </ProjectContent>
    </ProjectContainer>
  );
}
