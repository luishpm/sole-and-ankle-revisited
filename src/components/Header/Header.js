import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <TopBorder />
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavMobile>
          <Icon id="shopping-bag" strokeWidth={1} />
          <Icon id="search" strokeWidth={1} on />
          <MenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" strokeWidth={1} />
          </MenuButton>
        </NavMobile>
        <SideRight />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-y: hidden;
  overflow-x: auto;
  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const TopBorder = styled.hr`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    border: 4px solid ${COLORS.gray["900"]};
  }
` ;
const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, -2.8776rem + 6.5306vw, 3rem);
  margin: 0 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavMobile = styled.nav`
  display: none;
  
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: clamp(1.063rem, -0.759rem + 4.857vw, 2.125rem)
  }
`;

const Side = styled.div`
  flex: 1;
`;

const SideRight = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MenuButton = styled.div`

`;

export default Header;
