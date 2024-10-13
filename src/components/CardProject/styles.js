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
    border-radius: 1rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    max-width: 40rem;
  }
`;

export const CardLink = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    display: flex;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    border-radius: 8px;
    background: black;
    text-decoration: none;
    color: white;

    cursor: pointer;
  }
`;
