import { ArrowForward } from "@mui/icons-material";
import { ContactContainer } from "./styles";

export function Contact () {
  return(
      <ContactContainer>
        <h1>Vamos trabalhar juntos!</h1>
        <p>Entre em contato comigo em caso de dúvidas ou oportunidades</p>
        <a href="mailto:pablorafael.dev@gmail.com">pablorafael.dev@gmail.com <ArrowForward/></a>
      </ContactContainer>
  )
}; 