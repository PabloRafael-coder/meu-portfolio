import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 4rem;

  width: min(375px, 100% - 2 * 1.5rem);
  margin-inline: auto;

  h1{
    font-size: 3rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-700);
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: var(--green-500);
  }

  @media (width >= 80rem) {
    width: min(80rem, 100% - 2 * 1.5rem);
  }
`;