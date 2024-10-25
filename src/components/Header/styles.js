import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  padding-block: 1rem;
  margin-inline: auto;
  --max-width: 375px;
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
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  display: none;

  @media (width >= 45rem) {
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  font-family: 'Martian Mono', sans-serif;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: 500;
  font-size: 0.775rem;
  padding: 0.2rem 1rem;
  text-transform: uppercase;

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

export const MobileHeaderNavContainer = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;

  @media (width >= 45rem) {
    display: none;
  }
`;
