import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size} from "../../Config/Var";
import { Col } from "styled-bootstrap-grid";
import ProductCardBox from "../elements/ProductCardsBox";
import SubCategory from "./SubCaregory";

const CMainblock = styled.div`
    margin: 0 auto;
    max-width: 75%;
    background-color: ${colors.grey_1};
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
    padding-bottom: 25px;
    display: flex;
`;


export default class CategoryBlock extends Component {
    render() {
        return (
            <CMainblock>
                <Cbreadcrumb></Cbreadcrumb>
                <CTitle>Женская одежда</CTitle>
                <Cblock>
                    <Col md={3} lg={2}>
                        <SubCategory/> 
                    </Col>
                    <Col md={10} lg={10}>
                        <ProductCardBox/>
                    </Col>
                </Cblock>
            </CMainblock>
        );
    }
}
