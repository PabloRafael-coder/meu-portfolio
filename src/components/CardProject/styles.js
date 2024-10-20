import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-block: 2rem;
  background-color: #ffffff;
`;

export const CardImage = styled.div`
  max-width: 35rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0 1rem;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    max-width: 40rem;
    line-height: 2;
  }
`;

export const CardLink = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0.2rem 0.5rem;

    font-size: 0.875rem;
    font-family: 'Martian Mono', sans-serif;

    border-radius: 0.25rem;
    text-transform: uppercase;
    background: var(--gray-900);
    color: var(--gray-300);
    text-decoration: none;

    cursor: pointer;

    &:hover {
      color: var(--white);
    }
  }
`;
