import React, { Component } from "react";
import styled from "styled-components";
import { Row} from "react-bootstrap";
import CategoryCard from "./CategoryСard";


const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <ProductBox>
                <Row >
                    <CategoryCard/>
                </Row>
                <Row >
                    <CategoryCard/>
                </Row>
                <Row >
                    <CategoryCard/>
                </Row>
                <Row >
                    <CategoryCard/>
                </Row>
            </ProductBox>
        );
    }
}






