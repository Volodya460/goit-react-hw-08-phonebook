import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import StyledLink, { Container, H1, Header } from './Layout.styled';
import UserMenu from './UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import authSelectord from 'redux/auth/authSelectors';

const Layout = () => {
  const isLoggedIn = useSelector(authSelectord.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <H1>
          <span style={{ color: 'red' }}>Phone</span>book
        </H1>
        {isLoggedIn ? (
          <>
            <StyledLink to="/contacts ">Contacts </StyledLink>
            <UserMenu />
          </>
        ) : (
          <div>
            <StyledLink to="/register">Register </StyledLink>
            <StyledLink to="/login">Login </StyledLink>
          </div>
        )}
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};

export default Layout;
