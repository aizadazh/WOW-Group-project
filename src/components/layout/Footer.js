import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import footerLogo from "../../static/images/11a.png";
import { colors } from "../../Config/Var";
import { Link } from "react-router-dom";

class Footer extends Component {  
    render(){
      return (
        <Container>
          <ThemeProvider theme={theme}>
            <FooterBase>              
                <FooterBox> 
                                   
                    <a href="/">
                      <Img src={footerLogo} alt="logo" />
                      </a>
                    <TextBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</TextBlock>                    
                    <AgreeTitle><Link to = "/">Пользовательское соглашение</Link></AgreeTitle>                  
                  
                </FooterBox>
                <FooterBox>
                                    
                    <MenuTitle>Меню</MenuTitle>
                    <Ul>                
                      <MenuLink><a href="/">Обратная связь</a></MenuLink>
                      <MenuLink><a href="/">Мои заказы</a></MenuLink>
                      <MenuLink><a href="/">Настройки</a></MenuLink>
                      <MenuLink><a href="/">О сервисе</a></MenuLink>
                    </Ul>
                  
                </FooterBox>     
                <FooterBox>                                    
                  <MenuTitle>Меню</MenuTitle>
                    <Ul>                
                      <MenuLink><a href="/">Обратная связь</a></MenuLink>
                      <MenuLink><a href="/">Мои заказы</a></MenuLink>
                      <MenuLink><a href="/">Настройки</a></MenuLink>
                      <MenuLink><a href="/">О сервисе</a></MenuLink>
                    </Ul>                  
                </FooterBox> 
                <FooterBox>                                    
                  <MenuTitle>Меню</MenuTitle>
                    <Ul>                
                      <MenuLink><a href="/">Обратная связь</a></MenuLink>
                      <MenuLink><a href="/">Мои заказы</a></MenuLink>
                      <MenuLink><a href="/">Настройки</a></MenuLink>
                      <MenuLink><a href="/">О сервисе</a></MenuLink>
                    </Ul>                  
                </FooterBox>  
                <FooterBox>                                    
                  <MenuTitle>Меню</MenuTitle>
                    <Ul>                
                      <MenuLink><a href="/">Обратная связь</a></MenuLink>
                      <MenuLink><a href="/">Мои заказы</a></MenuLink>
                      <MenuLink><a href="/">Настройки</a></MenuLink>
                      <MenuLink><a href="/">О сервисе</a></MenuLink>
                    </Ul>                  
                </FooterBox>  
                <FooterBox>                                    
                  <MenuTitle>Меню</MenuTitle>
                    <Ul>                
                      <MenuLink><a href="/">Обратная связь</a></MenuLink>
                      <MenuLink><a href="/">Мои заказы</a></MenuLink>
                      <MenuLink><a href="/">Настройки</a></MenuLink>
                      <MenuLink><a href="/">О сервисе</a></MenuLink>
                    </Ul>                  
                </FooterBox>               
            
            </FooterBase>            
          </ThemeProvider>           
        </Container>
      );
    }
  }
const theme = {
  font: "Roboto"
};
const Img = styled.img`
  width: 7em;
  height:auto;
`;
const FooterBase = styled.div`
  background: ${colors.footer};
  width: 100%;
  border-top: 1px solid ${colors.blue};
  padding: 2rem;
  display: flex;
  margin: 0 auto;
`; 
const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  
`;
const TextBlock = styled.p`
  font-family: ${props=>props.theme.font};  
  font-weight: 400;
  font-size: 1.4rem;
  color: ${colors.footertext};
  line-height: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const AgreeTitle = styled.h3`
  font-family: ${props=>props.theme.font};
  font-weight: 500;
  font-size: 1.6rem;
  color: ${colors.black}; 
  text-decoration: none;
  &:hover{
  color: ${colors.srh};
      }
`;
const MenuTitle = styled.h4`
  font-family: ${props=>props.theme.font};
  font-weight: 600;
  font-size: 1.6rem;
  color: ${colors.black};
  margin-bottom: 15px;
  margin-top: 9px;
  `;
const MenuLink= styled.li` 
  padding-bottom: 0.8rem;    
  a {
    font-family: ${props=>props.theme.font};
    color: ${colors.a};
    font-size: 1.5rem;
    font-weight: 500; 
     
    text-decoration: none;
    &:hover{
      color: ${colors.srh};
    }
  }
`;
const Ul = styled.ul`
  list-style-type: none;
  margin-left: -2.2em;
  `;

export default Footer;