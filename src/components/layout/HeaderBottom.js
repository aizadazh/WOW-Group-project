import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { colors } from "../../Config/var";



class HeaderBottom extends Component {
    render(){
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <div className="nav">                    
                        <HeaderNav>
                            <Navlink>
                                <Link to="/">
                                    <div className="push-menu"><span className="span-menu"></span></div>
                                    Все категории</Link>
                                <HeaderNav>
                                    <Navlink>
                                        <HeaderNav>
                                            <Navlink><Link to="category.html" target="_blank">Женская одежда</Link></Navlink>
                                            <Navlink><Link to="category.html" target="_blank">Женская одежда больших
                                                размеров</Link></Navlink>
                                            <Navlink><Link to="category.html" target="_blank">Мужская одежда</Link></Navlink>
                                            <Navlink><Link to="category.html" target="_blank">Детская одежда</Link></Navlink>
                                        </HeaderNav>
                                    </Navlink>
                                </HeaderNav>
                            </Navlink>
                            <Navlink className="nav-li">
                                <Link to="#woman-cloth">Женская одежда</Link>
                                <HeaderNav className="category">
                                    <Navlink className="category-items">
                                        <h2 className="title-category">Женская одежда</h2>
                                        <HeaderNav className="un-category">
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                        </HeaderNav>
                                    </Navlink>
                                </HeaderNav>
                            </Navlink>
                            <Navlink className="nav-li">
                                <Link to="#man-cloth">Мужская одежда</Link>
                                <HeaderNav className="category">
                                    <Navlink className="category-items">
                                        <h2 className="title-category">Женская одежда</h2>
                                        <HeaderNav className="un-category">
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                        </HeaderNav>
                                    </Navlink>
                                </HeaderNav>
                            </Navlink>
                            <Navlink className="nav-li"><Link to="#teen-cloth">Детская одежда</Link>
                                <HeaderNav className="category">
                                    <Navlink className="category-items">
                                        <h2 className="title-category">Женская одежда</h2>
                                        <HeaderNav className="un-category">
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                            <Navlink className="un-category-items">
                                                <h2 className="title-subcategory">категория</h2>
                                                <HeaderNav>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                    <Navlink className="subcategory"><Link to="/">товар</Link></Navlink>
                                                </HeaderNav>
                                            </Navlink>
                                        </HeaderNav>
                                    </Navlink>
                                </HeaderNav>
                            </Navlink>
                        </HeaderNav>            
                    </div>
                </ThemeProvider>
            </Container>
        )
    }
}
const theme = {
    font: "Roboto"
  };
const HeaderNav = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    margin-bottom: 0;
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