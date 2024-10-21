import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  border-bottom: 1px solid var(--gray-100);

  --max-width: 375px;
  width: min(var(--max-width), 100% - 1.5rem * 2);

  @media (width >= 80rem) {
    width: min(80rem, 100% - 1.5rem * 2);
    flex-direction: row;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: 0 -3rem;
  }

  p {
    width: 100%;
    padding: 0.5rem;

    font-family: 'Martian Mono', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;

    border-radius: 0.25rem;
    background-color: var(--gray-900);

    color: var(--gray-300);

  }

  @media (width >= 80rem) {
      
      img {
      width: 200px;
      height: auto;
      border-radius: 10px;
      object-position: 0;
      box-shadow: 6px 5px 20px #00000080;
    }
      }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1;
    color: var(--gray-700);
  }

  p {
    font-size: 1rem;
    text-align: start;
    line-height: 1.75rem;
  }

  @media (width >= 80rem) {
    max-width: 50rem;

    h1 {
      font-size: 3rem;
      text-align: start;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (width >= 80rem) {
    justify-content: start;
  }
`;

export const HireButton = styled.a`
  display: flex;
  align-items: center;
  padding: .5rem;
  font-size: 0.875rem;
  font-family: 'Martian Mono', sans-serif;
  text-transform: uppercase;
  text-decoration: none;

  border: 0;
  border-radius: 0.25rem;

  background: var(--gray-900);
  color: var(--gray-300);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const ProjectButtonContainer = styled.div`
  display: flex;
`;

export const ProjectButton = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.875rem;
  font-family: 'Martian Mono', sans-serif;
  border: 0;
  padding: 0.5rem;
  border-radius: .25rem;
  
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  background: none;
  cursor: pointer;

  &:hover {
    background-color: #2e7d32;
    color: var(--white);
  }
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-inline: auto;
  width: min(375px, 100% - 1.5rem * 2);
  padding-block: 4rem;
  border-bottom: 1px solid var(--gray-300);

  h2,
  p {
    align-self: center;
    max-width: 40rem;
  }

  @media (width >= 80rem) {
    width: min(80rem, 100% - 1.5rem * 2);
  }
`;

export const TextCardContainer = styled.p`
  text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (width >= 80rem) {
    width: min(80rem, 100% - 1.5rem * 2);
    flex-direction: row;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 4rem;
  gap: 2rem;
  margin-inline: auto;
  max-width: 60rem;
`;

export const ToolCardContents = styled.div`
  display: flex;
  width: min(375px, 100% - 1.5rem * 2);
  gap: 1rem;
  margin: auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  max-width: 40rem;

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
