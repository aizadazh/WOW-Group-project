import React, { Component } from "react";
import styled from "styled-components";
import {  Col } from "styled-bootstrap-grid";
import CategoryCard from "./CategoryСard";
import DropdownCategory from "./DropdownCategory";
import { colors} from "../../Config/Var";

const MainProductBox = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
`;

const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <MainProductBox>
                <DropdownCategory/>
                <ProductBox>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <CategoryCard/>
                </Col>
            </ProductBox>
            </MainProductBox>
        );
    }
}






