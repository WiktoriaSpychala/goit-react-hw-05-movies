import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  Layout,
  NavContainer,
  NavItem,
  NavList,
} from '../components/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavLink
              style={{
                textDecoration: 'none',
              }}
              to="/"
              end>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{
                textDecoration: 'none',
              }}
              to="/movies">
              Movies
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
