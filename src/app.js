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
    border: solid 2px blue;

    padding-block: 4rem;
    margin-inline: auto;

    --max-width: 375px;
    width: min(var(--max-width), 100% - 1.5rem * 2);


  @media (width >= 80rem) {
    width: min(80rem, 100% - 1.5rem * 2);
    flex-direction: row;
  }

`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    @media (width >= 80rem) {
    max-width: 40rem;
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