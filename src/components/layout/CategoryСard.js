import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { colors, font_size} from "../../config/var";
import { Title} from "../../config/Title";
import ProdImg from ".././images/product.jpg";


const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background: ${colors.grey_1};
    transition: all .4s;
    width: 180px;
    height: 214px;
    margin-bottom: 10px;
`;
const ProductImage = styled.div`
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    width: 180px;
    height: 180px;
`;
const Img = styled.img`
    width: 100%;
`;
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
    font-family: Roboto;
    font-size: ${font_size.productText};
    font-weight: 400;
    color: ${colors.dark_3};
`;

export default class CategoryCard extends Component {
    render() {
        return (
            <Col sm={6} md={4} lg={3} xl={3}>
                <CardContainer>
                    <ProductImage>
                        <Img src={ProdImg}/>
                        <Title>1589 SOM</Title>
                        <ProductTextCont>
                            <ProductText> Est et modo omittam,
                                elit dolores molestie pro eu, 
                                duis iudicabit ne duo. Ex verear 
                                deseruisse est, his legere possit 
                                theophrastus ut
                            </ProductText>
                        </ProductTextCont>
                    </ProductImage>
                </CardContainer>
            </Col>
        );
    }
}

