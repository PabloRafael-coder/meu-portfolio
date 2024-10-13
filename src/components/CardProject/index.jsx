import { ArrowOutward } from '@mui/icons-material';
import todo from '../../assets/todo.svg';
import { CardContainer, CardContent, CardImage, CardLink } from './styles';

export function CardProject({ projectProps }) {
  console.log(projectProps);
  return (
    <CardContainer>
      <CardImage>
        <img src={projectProps.image} alt="" />
      </CardImage>
      <CardContent>
        <h2>{projectProps.title}</h2>
        <p>{projectProps.text}</p>
        <CardLink>
          <div>
            <a
              target="_blank"
              href="https://to-do-list-iota-five-94.vercel.app/"
            >
              Visite
              <ArrowOutward />
            </a>
          </div>
          <a
            target="_blank"
            href="https://github.com/PabloRafael-coder/to-do-list"
          >
            Source code
          </a>
        </CardLink>
      </CardContent>
    </CardContainer>
  );
}
