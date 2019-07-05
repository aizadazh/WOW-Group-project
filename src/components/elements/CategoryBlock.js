import React, { Component } from "react";
import styled from "styled-components";
import ProductCardBox from "../elements/ProductCardsBox";
import PodCategory from "../elements/PodCaregory";
import { colors, font_size} from "../../Config/Var";
import { Col, Row, Container} from "react-bootstrap";


const CMainblock = styled.div`
    margin: 0 auto;
    width: 90%;
    background-color: #f8f8f8;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
`;
const Cbreadcrumb = styled.div`

`; 
const CTitle = styled.h2`
    font-family: Roboto;
    font-weight: 600;
    font-size: ${font_size.sl_title};
    color: ${colors.dark_1};
    margin-bottom: ${font_size.sl_title};
    padding-bottom: 10px;
`;

const Cblock = styled.div`
    background-color: #f8f8f8;
    padding-bottom: 25px;
    display: flex;
    justify-content: flex-start;
`;


export default class CategoryBlock extends Component {
    render() {
        return (
            <Container>
                <CMainblock>
                    <Cbreadcrumb></Cbreadcrumb>
                    <CTitle>Женская одежда</CTitle>
                    <Cblock>
                        <Row>
                            <Col md={2} lg={2} xl={2}>
                                <PodCategory/> 
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10} lg={10} xl={10}>
                                <ProductCardBox/>
                            </Col>
                        </Row>
                    </Cblock>
                </CMainblock>
            </Container>
        );
    }
}
