import { HeaderNav, LinkStyled } from './Header.styled';

const Header = () => {
  return (
    <header>
      <HeaderNav>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </HeaderNav>
    </header>
  );
};

export default Header;
