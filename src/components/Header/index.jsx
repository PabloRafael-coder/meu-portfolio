import {
  HeaderContainer,
  HeaderNavContact,
  HeaderNavLink,
  HeaderNavList,
  MobileHeaderNavContainer,
} from './styles';

import { Dehaze } from '@mui/icons-material';

export function Header() {
  return (
    <HeaderContainer>
      <p>
        PabloRafael
        <span>-coder</span>
      </p>
      <nav>
        <HeaderNavList>
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
        <MobileHeaderNavContainer>
          <Dehaze />
        </MobileHeaderNavContainer>
      </nav>
    </HeaderContainer>
  );
}
