import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  padding: 16px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const LinkStyled = styled(NavLink)`
  margin-right: 12px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: red;
  }
`;
