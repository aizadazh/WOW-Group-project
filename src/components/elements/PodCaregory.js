import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, font_size} from "../../Config/Var";


const LeftMenu = styled.div`
    width: 
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    position: sticky;
    top: 70px;
`;

const PodCat = styled.ul`
    list-style-type: none;
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 50px;
    position: sticky;
    top: 70px;
  li {
    a {
        padding: 5px;
        width: 100%;
        font-family: Roboto;
        font-size: ${font_size.product_text};
        font-weight: 500;
        color: #040505;
        text-decoration: none;
      &:hover {
        color: ${colors.leftmenu_a};
        }
    }
  }
`;

export default class PodCategory extends Component {
    render() {
        return (
            <LeftMenu>
                <PodCat>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                    <li>
                        <Link to="/Category"> Подкатегории </Link>
                    </li>
                </PodCat>
            </LeftMenu>
        );
    }
}



