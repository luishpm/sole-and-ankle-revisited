/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS, QUERIES, WEIGHTS} from "../../constants";
import {X} from "react-feather";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <Overlay
          isOpen={isOpen}
          onDismiss={onDismiss}>
        <Content aria-label='Mobile Menu'>
          <CloseButton onClick={onDismiss}>
            <X />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
          <MenuNav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </MenuNav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  flex: 0 0 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding-top: 26px;
  padding-right: 16px;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  flex: 1;
  justify-content: center;
  gap: 22px;
  font-size: 1.125rem;
  
  a {
    color: ${COLORS.gray["900"]};
    text-decoration: none;
    
    :hover {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  
  padding-left: 32px;
  padding-bottom: 32px;
  justify-content: flex-start;
  font-weight: ${WEIGHTS.normal};

  a {
    color: ${COLORS.gray["700"]};
    text-decoration: none;
    font-size: .875rem;
    line-height: 1rem;

    :hover {
      color: var(--color-secondary);
    }
`;

export default MobileMenu;
