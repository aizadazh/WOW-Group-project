import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, font_size} from "../../Config/Var";

const Selectblock = styled.div`
   width: 130px;
   height: 120px;
   border: 1px solid black;
   transition: 0.5s;
   margin-left: 20px;
   
   position: absolute; 
   z-index:1;
   background: ${colors.white};
   text-align: center;
   a {
    font-family: Roboto;
    font-weight: 400;
    font-size: ${font_size.product_title};
    color: ${colors.dark_3};
    text-decoration: none;
  &:hover {
    color: ${colors.dropdown};
    }
`;
export default class SecondSelectBlock extends Component {
    
    render() {
        return (
            <Selectblock>
                <Link to="/Category"> Lorem ipsum </Link>
                <Link to="/Category"> Lorem ipsum </Link>
                <Link to="/Category"> Lorem ipsum </Link>
                <Link to="/Category"> Lorem ipsum </Link>
            </Selectblock>
        );
    }
}    