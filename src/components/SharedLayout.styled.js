import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  text-decaration: none;
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;
export const NavContainer = styled.header`
  min-height: 64px;
  position: sticky;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px, auto;
  width: 100%;
  padding: auto;
  flex-direction: row;
  box-shadow: rgb(197, 219, 241) 0px 25px 20px -20px;
`;
export const NavList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  padding-left: 40px;
`;
export const NavLink = styled.h1`
text-decoration: none;
`;

export const NavItem = styled.div`
  margin: 5px 10px;
  padding: 4px;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
`;
