import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size} from "../../Config/Var";
import ProdImg from "../../static/images/product.jpg";
import { BtnProduct } from "./BtnProduct"

const ProductTextContSl = styled.div`
    background: ${colors.white}; 
    position: absolute; 
    bottom: -120px; 
    width: 100%; 
    border-radius: 5px;
    transition: all 0.4s;
`;
const ProductText = styled.p`
    margin-top: 10px; 
    margin-bottom: 10px; 
    padding-left: 5px; 
    font-family: 'Roboto'; 
    font-size: ${font_size.productText};
    color: ${colors.dark_3};
    font-weight: 400; 
`;
const CardContainerSl = styled.div`
    position: relative; 
    width: 220px; 
    height: 260px; 
    display: flex; 
    flex-direction: column; 
    border-radius: 5px; 
    background: ${colors.dark_3}; 
    transition: all 0.4s; 
    overflow: hidden;
    margin: 0 0  20px;
    
    &:hover {
        border-radius: 5px; 
        background: ${colors.white}; 
        transition: all 0.6s; 
        z-index: 3; 
      }
      &:hover ${ProductTextContSl} {
        bottom: 0; 
        z-index: 1; 
        border-radius: 5px; 
        transition: all 0.6s; 
        overflow: hidden; 
        color: #FFFfff; 
    }
`;
const ProductImage = styled.div`
    border-radius: 5px; 
    width: 220px; 
    height: 260px; 
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    transition: all 0.4s;
    &:hover {
        transition: all 0.6s; transform: scale(1.04);
    }
`;
const SmTitle = styled.h2`
    margin-top: 10px; 
    margin-bottom: 10px; 
    padding-left: 5px; 
    font-family: 'Roboto'; 
    font-size: 1.4rem; 
    font-weight: 400; 
    color: ${colors.dark_3}
`;

export default class PrcardinSlider extends Component {
    render() {
        return (
            <CardContainerSl>
                <ProductImage>
                    <Img src={ProdImg}/>
                </ProductImage>
                <ProductTextContSl>
                    <SmTitle>1589 SOM</SmTitle>
                    <ProductText> Est et modo omittam,
                        elit dolores molestie pro eu, 
                        duis iudicabit ne duo. Ex verear 
                        deseruisse est, his legere possit 
                        theophrastus ut
                    </ProductText>
                    <BtnProduct>подробнее</BtnProduct>
                </ProductTextContSl>
            </CardContainerSl>
        );
    }
}

