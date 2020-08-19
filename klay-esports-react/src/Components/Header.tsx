import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const HeaderTag = styled.header`    
  width: 100%;
  height: 75px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`
const NavInner = styled.div`
  max-width: $max-page-width;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.h1`
  width: 140px;
  img { width: 100%; }
`

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`
const NavButton = styled.button`
  font-size: 14px;
  line-height: 24px;
  color: $brownish-grey;
  margin-left: 36px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 6px;
    background: center / contain no-repeat;
  }

  &:hover { text-decoration: underline; }

  @include breakpoint("max-card") {
    width: 24px;
    height: 24px;
    overflow: hidden;
    margin-left: 24px;
  }
`

const Header:React.FunctionComponent = () =>  {
    return(
        <HeaderTag>
            <NavInner>
                <NavLogo>
                    <img src={require('../assets/logo-klaystagram.png')} alt="KlayESports"/>
                </NavLogo>
                <NavMenu>
                    <NavButton>
                        League Of Legend
                    </NavButton>
                    <NavButton>
                        Overwatch
                    </NavButton>
                    <NavButton>
                        Battleground
                    </NavButton>
                </NavMenu>
            </NavInner>
        </HeaderTag>
    )
}

export default Header;