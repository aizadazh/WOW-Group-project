import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "../../Config/Var";


class HeaderBottom extends Component {
    render(){
        return ( 
            <Nav> 
                <Container>
                    <NavContainer>
                        <ThemeProvider theme={theme}> 
                            <NavUl>
                                <NavlinkLi>                                
                                    <Link to="/">
                                        <PushMenu>
                                            <SpanMenu></SpanMenu>
                                        </PushMenu> 
                                        Все категории                                   
                                    </Link>
                                    <HeaderNavMain>
                                        <NavlinkAllItems>
                                            <HeaderNavCategory>
                                                <NavlinkCategory><Link to="/">Женская одежда</Link></NavlinkCategory>
                                                <NavlinkCategory><Link to="/">Женская одежда больших
                                                    размеров</Link></NavlinkCategory>
                                                <NavlinkCategory><Link to="/">Мужская одежда</Link></NavlinkCategory>
                                                <NavlinkCategory><Link to="/">Детская одежда</Link></NavlinkCategory>
                                            </HeaderNavCategory>
                                        </NavlinkAllItems>
                                    </HeaderNavMain>                                                                            
                                </NavlinkLi>  
                                <Navlink className="nav-li">
                                    <Link to="#woman-cloth">Женская одежда</Link>
                                    <HeaderNav>
                                        <NavlinkItems>
                                            <TitleCategory>Женская одежда</TitleCategory>
                                            <HeaderNavUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                            </HeaderNavUn>
                                        </NavlinkItems>
                                    </HeaderNav>
                                </Navlink>
                                <Navlink className="nav-li">
                                    <Link to="#man-cloth">Мужская одежда</Link>
                                    <HeaderNav>
                                        <NavlinkItems>
                                            <TitleCategory>Мужская одежда</TitleCategory>
                                            <HeaderNavUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory >категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                            </HeaderNavUn>
                                        </NavlinkItems>
                                    </HeaderNav>
                                </Navlink>
                                <Navlink className="nav-li"><Link to="#teen-cloth">Детская одежда</Link>
                                    <HeaderNav>
                                        <NavlinkItems>
                                            <TitleCategory>Детская одежда</TitleCategory>
                                            <HeaderNavUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                                <NavlinkUn>
                                                    <TitleSubCategory>категория</TitleSubCategory>
                                                    <HeaderNav>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                        <NavlinkSub><Link to="/">товар</Link></NavlinkSub>
                                                    </HeaderNav>
                                                </NavlinkUn>
                                            </HeaderNavUn>
                                        </NavlinkItems>
                                    </HeaderNav>
                                </Navlink>                                       
                            </NavUl> 
                        </ThemeProvider>
                    </NavContainer>
                </Container>
            </Nav>
        )
    }
}
const theme = {
    font: "Roboto"
  };
const Nav = styled.div`    
    height: 15vh;
    width: 100%;
    background: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 9999999;
`;
const NavContainer = styled.div`
    height: 100%;
`;
const PushMenu = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 5px;
`;
const SpanMenu = styled.span` 
    & {   
    display: block;
    height: 2px;
    width: 20px;
    background: ${colors.grey_3};
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -10px;
    margin-top: -1px;
    transition: 0.4s;
    }
    &:before{
        content: '';
    }
    &:after{
        content: '';
    }
    &:before {
        transform: translateY(-5px);
      }
    &:after{
        transform: translateY(5px);
    }
`;
const HeaderNav = styled.ul`
    display: flex;    
    list-style-type: none;
    align-items: center;
    margin-bottom: 0;
`;
const HeaderNavMain = styled.ul`
    position: relative;
`;
const HeaderNavUn = styled.ul`
    display: flex;
    justify-content: space-around;
    padding-left: 5%;
    padding-right: 5%;
    flex-wrap: wrap;
`;
const NavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    position: relative;
    width: 100%;
    height: 100%;
`;
const HeaderNavCategory = styled.ul`
    display: flex;
    list-style-type: none;
    width: 134%;
    background: ${colors.white};   
    justify-content: left;
    flex-direction: column;    
    align-items: flex-start;
    padding: 5px 10px 15px 5px;
    border-bottom:2px solid ${colors.a};
`;

const TitleCategory = styled.h2`
    font-family: ${props => props.theme.font};
    font-weight: 600;
    font-size: 2.4rem;
    color: ${colors.black};
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom:2px solid ${colors.a};
`;
const TitleSubCategory = styled.h2`
    font-family: ${props => props.theme.font};
    font-weight: 600;
    font-size: 1.9rem;
    color: ${colors.black};
    margin-top: 5px;
    margin-bottom: 5px;
`;
const NavlinkAllItems = styled.li`
    opacity: 0;
    width: 100%;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    
`;
const NavlinkCategory = styled.li`
    margin-top: 15px;
    a {
    color: ${colors.a};
    }
    &:hover{
        color: ${colors.sub};
    } 
    
`;
const NavlinkItems = styled.li`
    opacity: 0;
    width: 100%;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
`;
const NavlinkUn = styled.li`
    display: inline-block;
    width: 200px;
    margin-top: 25px;
`;
const NavlinkSub= styled.li`
    display: flex;
    justify-content: left;
    a {
        color: ${colors.a};
        font-family: ${props => props.theme.font};
        font-weight: 400;
    }
    &:hover{
        color: ${colors.sub};
    }
`;
const NavlinkLi= styled.li`
    font-weight: bold;
    margin-right: 1.5em;
    color: ${colors.a};
    &:hover {
        color: ${colors.srh};
    }
    &:hover ${NavlinkAllItems}{
            opacity: 1;
            visibility: visible;
            transition: all 0,4s;
        }
    &:hover ${NavlinkItems}{
        opacity: 1;
        visibility: visible;
        transition: all 0,4s;
    }   
    a {
    font-family: ${props => props.theme.font};
    font-weight: 700;
    color: ${colors.a};
    text-decoration: none;
    &:hover {
        color: ${colors.srh};
        }
    }
    display: inline-block;
    height: 100%;
    a:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
`;
const Navlink = styled.li`    
    font-weight: bold;
    margin-right: 1.5em;
    color: ${colors.a};
    &:hover {
        color: ${colors.srh};
        }
    a {
    font-family: ${props => props.theme.font};
    font-weight: 700;
    color: ${colors.a};
    text-decoration: none;
    &:hover {
        color: ${colors.srh};
    }
    }
`;

export default HeaderBottom;