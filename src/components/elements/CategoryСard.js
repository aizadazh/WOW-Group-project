import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { colors, font_size} from "../../Config/Var";
//import { SmTitle} from "../../Config/Title";
import ProdImg from "../../static/images/product.jpg";
import { BtnProduct } from "./BtnProduct"

const ProductTextCont = styled.div`
    visibility: hidden; 
    background: ${colors.white}; 
    position: absolute; 
    bottom: -100px; 
    width: 100%; 
    border-radius: 5px;
`;
const ProductText = styled.p`
    margin-top: 10px; 
    margin-bottom: 10px; 
    padding-left: 5px; 
    font-family: 'Roboto'; 
    font-size: ${font_size.productText};
    color: ${colors.dark_3};
`;
const CardContainer = styled.div`
    position: relative; 
    width: 234px; 
    height: 300px; 
    display: flex; 
    flex-direction: column; 
    border-radius: 5px; 
    background: ${colors.dgrey_1}; 
    transition: all 0.4s; 
    margin-bottom: 10px;
    margin-left:200px;
    &:hover {
        border-radius: 5px 5px 0 0; 
        background: #ffffff; 
        transition: all 0.4s; 
        transform: scale(1.04); 
        z-index: 3; 
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.8), 0 10px 10px rgba(0, 0, 0, 0.22); 
      }
      &:hover ${ProductTextCont} {
        z-index: 1; 
        visibility: visible; 
        opacity: 1; 
        border-radius: 0 0 5px 5px; 
        transition: all 0.6s; 
        box-shadow: 0 12px 13px rgba(0, 0, 0, 0.8), 0 10px 10px rgba(0, 0, 0, 0.22); 
        overflow: hidden; 
    }
`;
const ProductImage = styled.div`
    border-radius: 5px; 
    width: 100%; 
    height: 240px; 
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    
`;
const SmTitle = styled.h2`
    margin-top: 10px; 
    margin-bottom: 20px; 
    padding-left: 5px; 
    font-family: 'Roboto'; 
    font-size: 1.6rem; 
    font-weight: 400; 
    color: ${colors.dark_3}
`;

export default class CategoryCard extends Component {
    render() {
        return (
            <Col sm={6} md={4} lg={3} xl={3}>
                <CardContainer>
                    <ProductImage>
                        <Img src={ProdImg}/>
                    </ProductImage>
                    <SmTitle>1589 SOM</SmTitle>
                    <ProductTextCont>
                        <ProductText> Est et modo omittam,
                            elit dolores molestie pro eu, 
                            duis iudicabit ne duo. Ex verear 
                            deseruisse est, his legere possit 
                            theophrastus ut
                        </ProductText>
                        <BtnProduct>подробнее</BtnProduct>
                    </ProductTextCont>
                </CardContainer>
            </Col>
        );
    }
}

