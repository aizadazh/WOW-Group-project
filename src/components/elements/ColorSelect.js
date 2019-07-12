import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, font_size} from "../../Config/Var";
import FourthSelectBlock from "./FirstSelectBlock"

const SBlock = styled.div`
    width: 150px;
`;
const SortForm = styled.div`
   width: 150px;
   height: 25px;
   border: 1px solid ${colors.dropdown};
   margin: 20px 15px 5px;
   border-radius: 3px;
   a {
       padding: 5px;
       width: 100%;
       font-family: Roboto;b
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


export default class SizeSelect extends Component {
    state = {
        isOpen: false
    };
    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        return (
            <SBlock>
                <SortForm>
                    <Link to="/Category" onClick={this.handleClick}> Цвет: все </Link>
                </SortForm>
                { this.state.isOpen ? <FourthSelectBlock /> : null }
            </SBlock>
        );
    }
}

