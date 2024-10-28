import { useEffect, useState } from 'react';
import {
  HeaderContainer,
  HeaderNavContact,
  HeaderNavLink,
  HeaderNavList,
  MobileHeaderNavContainer,
} from './styles';
import { Close, Dehaze } from '@mui/icons-material';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleResize() {
    if (window.innerWidth > 800) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <p>
        PabloRafael
        <span>-coder</span>
      </p>
      <nav>
        <HeaderNavList isOpen={isOpen}>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/project">Projetos</HeaderNavLink>
          <HeaderNavLink to="https://github.com/PabloRafael-coder">
            GitHub
          </HeaderNavLink>
          <HeaderNavLink to="https://www.linkedin.com/in/pablo-rafael-1372a2279/">
            Linkedin
          </HeaderNavLink>
          <HeaderNavContact to="/contact">Entre em contato</HeaderNavContact>
        </HeaderNavList>
        <MobileHeaderNavContainer
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <Close fontSize={'medium'} /> : <Dehaze />}
        </MobileHeaderNavContainer>
      </nav>
    </HeaderContainer>
  );
}
