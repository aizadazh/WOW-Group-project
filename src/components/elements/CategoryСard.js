import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size} from "../../Config/Var";
import ProdImg from "../../static/images/product.jpg";
import { BtnProduct } from "./BtnProduct";
import {  Col} from "styled-bootstrap-grid";
import CategoryData from "../../data/category.json";



const ProductTextCont = styled.div`
    visibility: hidden; 
    background: ${colors.white}; 
    position: absolute; 
    bottom: -110px; 
    width: 100%; 
    border-radius: 5px;
`;
const ProductText = styled.p`
    margin-top: 10px;
    margin-bottom: 10px; 
    padding-left: 5px; 
    font-family: 'Roboto'; 
    font-size: ${font_size.product_text};
    color: ${colors.dark_3};
`;
const CardContainer = styled.div`
    position: relative; 
    width: 100%; 
    height: 260px; 
    display: flex; 
    flex-direction: column; 
    border-radius: 5px; 
    background: ${colors.dgrey_1}; 
    transition: all 0.4s; 
    margin: 0;
    margin-bottom: 10px;
    &:hover {
        border-radius: 5px 5px 0 0; 
        background: ${colors.white}; 
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
    height: 220px; 
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    margin: 0;
`;
const SmTitle = styled.h2`
    margin: 0;
    padding: 5px; 
    font-family: 'Roboto'; 
    font-size: ${font_size.product_title}; 
    font-weight: 400; 
    color: ${colors.dark_3}
    background: ${colors.grey_1};
    border-radius: 5px;
`;

export default class CategoryCard extends Component {
    render() {
        return (
            <>
                {CategoryData.map((cardData, index) => {
                    return(
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <CardContainer>
                                <ProductImage>
                                    <Img src={ProdImg}/>
                                </ProductImage>
                                <SmTitle>{cardData.price}</SmTitle>
                                <ProductTextCont>
                                    <ProductText>{cardData.description}</ProductText>
                                    <BtnProduct target="_blank" ref={cardData.id}>Подробнее {cardData.id}</BtnProduct>
                                </ProductTextCont>
                            </CardContainer>
                        </Col>
                    ) 
                })}
            </>    
               
            
        );
    }
}

