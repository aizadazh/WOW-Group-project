import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col} from "react-bootstrap";
import CategoryCard from "./CategoryСard";


const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <ProductBox>
                <Row>
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                </Row>
                <Row >
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                </Row>
                <Row >
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                </Row>
                <Row >
                    <Col sm={6} md={4} lg={3} xl={3}>
                        <CategoryCard/>
                    </Col>
                </Row>
            </ProductBox>
        );
    }
}






