import React, { Component } from "react";
import styled from "styled-components";
import { Col, Row, Container} from "react-bootstrap";
//import { colors, font_size} from "../../Config/Var";
import CategoryCard from "./CategoryСard";

const ProductBox = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={6} md={8} lg={8} xl={8} >
                        <ProductBox>
                            <Row >
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                            </Row>
                            <Row >
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                            </Row>
                            <Row >
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                                <Col sm={6} md={4} lg={3} xl={3} > <CategoryCard/></Col>
                                <Col sm={6} md={4} lg={3} xl={3} > </Col>
                            </Row>
                        </ProductBox>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}



//<Col md={10} lg={10} xl={10} >
//sm={6} md={4} lg={3} xl={3}


