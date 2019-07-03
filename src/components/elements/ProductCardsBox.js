import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
//import { colors, font_size} from "../../Config/Var";
import CategoryCard from "./CategoryСard";

const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    width: 1000px;
    heigth: 800px;

`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <Container>
                 <ProductBox>
                    <CategoryCard/>
                    <CategoryCard/>
                        
                 </ProductBox>
                <Row>
                    <Col md={10} lg={10} xl={10}>
                        
                    </Col>
                </Row>
                
            </Container>
            
           
        );
    }
}
