import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, font_size} from "../../Config/Var";
import ProductCardBox from "../elements/ProductCardsBox";
import SubCategory from "./SubCaregory";

const CMainblock = styled.div`
    background-color: ${colors.grey_1};
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
`;
const Cbreadcrumb = styled.div`
    a {
        margin-right: 5px;
        font-style: italic;
        color: black;
        text-decoration: none;
        &:after {
            content: "/";
        }
        &:last-child:after {
            content: "";
        }
    }

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
                <Cbreadcrumb>
                    <Link to = "/">Home</Link>
                    <Link to = "/category">Library</Link>
                </Cbreadcrumb>
                <CTitle>Женская одежда</CTitle>
                <Cblock>                
                        <SubCategory/> 
                        <ProductCardBox/>
                </Cblock>
            </CMainblock>
        );
    }
}
