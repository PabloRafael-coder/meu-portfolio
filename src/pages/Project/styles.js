import styled from 'styled-components';

export const ProjectContainer = styled.main`
  width: min(80rem, 100% - 2rem * 2);
  margin-inline: auto;
  padding-block: 2rem;
`;

export const ProjectContent = styled.section`
  h2 {
    max-width: max-content;
    font-family: 'Martian mono', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
    background: var(--gray-900);
    color: var(--gray-300);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
`;
