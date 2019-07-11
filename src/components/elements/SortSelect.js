import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, font_size} from "../../Config/Var";

const SortForm = styled.div`
    width: 250px;
    height: 25px;
    border: 1px solid ${colors.dropdown};
    margin: 20px;
    border-radius: 3px;
    a {
        padding: 5px;
        width: 100%;
        font-family: Roboto;
        font-size: ${font_size.product_text};
        font-weight: 500;
        color: ${colors.dark_1};
        text-decoration: none;
      &:hover {
        color: ${colors.dropdown};
        }
        &::after {
            display: inline-block;
            margin-left: 0.255em;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
        }
    }
`;

export default class SortSelect extends Component {
  render() {
    return (
        <SortForm>
          <Link to="/Category"> Сортировка: по умолчанию </Link>
      </SortForm>
    );
}
}