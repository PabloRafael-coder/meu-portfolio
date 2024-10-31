import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding-block: 1rem;
  margin-inline: auto;
  --max-width: 80rem;
  width: min(var(--max-width), 100% - 1.5rem * 2);
  border-bottom: 1px solid var(--gray-100);

  & p {
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-inline-end: auto;
    font-family: 'Martian Mono', sans-serif;
  }

  & span {
    color: var(--gray-400);
    font-weight: 300;
  }

  @media (width >= 45rem) {
    width: min(80rem, 100% - 1.5rem * 2);
  }
`;

export const HeaderNavList = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: ${({ $isOpen }) => ($isOpen ? '1rem' : '')};
  top: ${({ $isOpen }) => ($isOpen ? '3.5rem' : '')};
  position: ${({ $isOpen }) => ($isOpen ? 'absolute' : '')};
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  background: ${({ $isOpen }) =>
    $isOpen ? 'linear-gradient(179deg, #939393, #8d8d8df7);' : ''};
  padding: ${({ $isOpen }) => ($isOpen ? '5rem 3rem' : '0')};
  border-radius: ${({ $isOpen }) => ($isOpen ? '0.5rem' : '0')};
  border: ${({ $isOpen }) => ($isOpen ? 'solid 1px var(--gray-300)' : '0')};

  @media (width >= 45rem) {
    display: block;
    position: ${({ screenSize }) => (screenSize > 800 ? 'relative' : '')};
  }
`;

export const HeaderNavLink = styled(NavLink)`
  font-family: 'Martian Mono', sans-serif;
  text-decoration: none;
  color: var(--gray-100);
  font-weight: 500;
  font-size: 0.775rem;
  padding: 0.2rem 1rem;
  text-transform: uppercase;

  @media (width >= 45rem) {
    color: var(--gray-900);
  }

  &.active {
    color: var(--gray-300);
    border-bottom: 2px solid var(--green-300);
    background: var(--gray-900);
    border-radius: 0.25rem;
  }
`;
export const HeaderNavContact = styled(NavLink)`
  font-family: 'Martian Mono', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.775rem;
  padding: 0.7rem 0.5rem;
  color: var(--gray-300);
  background-color: var(--gray-900);
  border-radius: 0 18px;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background-color: var(--gray-900);
  }
`;

export const MobileHeaderNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: max-content;
    padding: 5rem;
    background: linear-gradient(180deg, #1c1a1a, #d9d9d9cf);
    gap: 1rem;

    position: absolute;
    top: 3.5rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &:hover {
    background-color: var(--gray-300);
  }

  @media (width >= 45rem) {
    display: none;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
