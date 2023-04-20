import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid #000000;
  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  height: 100%;
`;

const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-weight: 300;
  &.hover {
    color: white;
    background-color: #2f4f4f;
  }
  &.active {
    color: white;
    background-color: #2f4f4f;
  }
`;

export const H1 = styled.h1`
  font-family: Bradley Hand, cursive;
`;

export default StyledLink;
