import React, { Component } from "react";
import styled from "styled-components";
import {  Col } from "styled-bootstrap-grid";
import CategoryCard from "./CategoryСard";


const ProductBox = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    
`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <ProductBox>
               
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
            </ProductBox>
        );
    }
}






