import styled from 'styled-components';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding-block: 4rem;
    margin-inline: auto;

    --max-width: 375px;
    width: min(var(--max-width), 100% - 1.5rem * 2);


  @media (width >= 80rem) {
    width: min(80rem, 100% - 1.5rem * 2);
    flex-direction: row;
  }
`;

export const UserProfile = styled.div`

  text-align: center;

  img {
    width: 200px;
    border-radius: 10px;
    box-shadow: 6px 5px 20px #00000080;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;

    border-radius: 8px;
    color: var(--gray-700);
  }
`


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    h1 {
      font-size: 2rem;
      line-height: 1; 
      color: var(--gray-700);
    }

    p {
      font-size: 1rem;
      text-align: start;
      line-height: 1.75rem;
    }

    @media (width >= 80rem) {
      max-width: 40rem;

      h1 {
      font-size: 3rem;
      }

      p {
        font-size: 1.2rem;
      }
  }
  
`; 

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (width >= 80rem) {
    justify-content: start;
  }
`;

export const HireButton = styled.button`
    padding: 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    
    border: 0;
    border-radius: 8px;

    background: var(--black);
    color: var(--white);
    cursor: pointer;
`;

export const ProjectButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`;

export const ProjectButton = styled.button`
    font-weight: 700;
    font-size: 1rem;
    border: 0;

    background: none;
    cursor: pointer;
`;

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-inline: auto;
    width: min(375px, 100% - 1.5rem * 2);
    padding-block: 4rem;
    
    h2, p {
      text-align: start;
    }

    @media (width >= 80rem) {
      width: min(80rem, 100% - 1.5rem * 2);

      h2, p {
        text-align: center;
      }
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    

    @media (width >= 80rem) {
      width: min(80rem, 100% - 1.5rem * 2);
      flex-direction: row;
    }
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: 4rem;
    gap: 2rem;
    margin-inline: auto;
    max-width: 60rem;
`;

export const ToolCardContents = styled.div`
    display: flex;
    width: min(375px, 100% - 1.5rem * 2);
    align-items: center;
    gap: 1rem;
    margin: auto;
    flex-wrap: wrap;

    @media (width >= 80rem) {
      width: min(80rem, 100% - 1.5rem * 2);
    }
`;

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    width: 100%;
    color: var(--white);
    background: var(--gray-600);

    a {
      color: var(--white);
      text-decoration: none;
      font-size: 1.5rem;
    }
`;