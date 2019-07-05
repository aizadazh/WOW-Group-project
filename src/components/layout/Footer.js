import React, { Component } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled, { ThemeProvider } from "styled-components";
import footerLogo from "../../static/images/11a.png";
import { colors } from "../../Config/Var";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaVk } from "react-icons/fa";

class Footer extends Component {  
    render(){
      return (
        <Container>
          <ThemeProvider theme={theme}>
            <FooterBase>
              <Row>
                <Col xs={1} sm={1} md={1} lg={2}>
                  <FooterBox>                                    
                    <a href="/">
                      <Img src={footerLogo} alt="logo" />
                    </a>
                    <TextBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</TextBlock>                    
                    <TitleAgree><a href="/">Пользовательское соглашение</a></TitleAgree>          
                  </FooterBox>                
                </Col>
             
                <Col xs={1} sm={1} md={1} lg={2}>
                  <FooterBox>                                    
                    <MenuTitle>Меню</MenuTitle>
                    <Ul>                
                      <MenuLink><a href="/">Обратная связь</a></MenuLink>
                      <MenuLink><a href="/">Мои заказы</a></MenuLink>
                      <MenuLink><a href="/">Настройки</a></MenuLink>
                      <MenuLink><a href="/">О сервисе</a></MenuLink>
                    </Ul>                
                  </FooterBox> 
                </Col>
             
                <Col xs={1} sm={1} md={1} lg={2}>
                  <FooterBox>                                    
                    <MenuTitle>Как купить</MenuTitle>
                      <Ul>                
                        <MenuLink><a href="/">Оплата и доставка</a></MenuLink>
                        <MenuLink><a href="/">Возврат</a></MenuLink>
                        <MenuLink><a href="/">Помощь</a></MenuLink>                      
                      </Ul>                  
                  </FooterBox> 
                </Col>
             
               
                <Col xs={1} sm={1} md={1} lg={2}>    
                  <FooterBox>                                    
                    <MenuTitle>WOW  в социальных сетях</MenuTitle>
                      <UlSocial>                
                        <MenuLink><a href="/"><FaFacebookF /></a></MenuLink>
                        <MenuLink><a href="/"><FaInstagram /></a></MenuLink>
                        <MenuLink><a href="/"><FaWhatsapp /></a></MenuLink>
                        <MenuLink><a href="/"><FaVk /></a></MenuLink>
                      </UlSocial>                  
                  </FooterBox> 
                </Col>
             
                <Col xs={1} sm={1} md={1} lg={2}>
                  <FooterBox>                                    
                    <MenuTitle>Контакты</MenuTitle>
                      <Ul>                
                        <MenuLink><a href="/">+996 777 00 44 88</a></MenuLink>                     
                      </Ul>                  
                  </FooterBox>
                </Col>
              </Row>           
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
  width: 98%;
  border-top: 1px solid ${colors.blue};
  padding: 2rem;
  display: flex;
  margin-top: 2rem;
  margin-left: -1.4rem;
 
  
`; 
const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-left: 1rem; 
  
 
`;
const TextBlock = styled.p`
  font-family: ${props=>props.theme.font};  
  font-weight: 400;
  font-size: 1rem;
  color: ${colors.footertext};
  line-height: 130%;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;
const TitleAgree = styled.span`    
    margin-top: 1rem;    
    a{
      text-decoration: none;
      font-family: ${props=>props.theme.font};  
      font-weight: 500;  
      font-size: 1.2rem;
      color: ${colors.black};
    }
    &:hover{
      color: ${colors.srh};
    }
  
  `;


const MenuTitle = styled.h4`
  font-family: ${props=>props.theme.font};
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.black};
  margin-top: -0.2rem;
 
  `;
const MenuLink= styled.li` 
  padding-bottom: 0.8rem;    
  a {
    font-family: ${props=>props.theme.font};
    color: ${colors.a};
    font-size: 1rem;
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
const UlSocial = styled.ul`
  list-style-type: none;
  margin-left: -2.2em;
  display: flex;
  justify-content: space-between;
  `;

export default Footer;