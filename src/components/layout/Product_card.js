import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { colors} from "../../config/var";
//import EventImg from "../../images/product.jpg";


const Card_container = styled.div`
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
const Product_image = styled.div`
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    width: 180px;
    height: 180px;
`;

export default class CategoryCard extends Component {
    render() {
        return (
            <Col sm={6} md={4} lg={3} xl={3}>
                <Card_container>
                    <Product_image>
                        <img src={images}/>
                    <Product_image/>
                <Card_container/>
            <Col/>
        );
    }
}
export default (CategoryCard);