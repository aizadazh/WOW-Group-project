import React, { Component } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import { colors} from "../../Config/Var";
import {BtnSelect} from "./BtnSelect"

const Selectblock = styled.div`
    width: 130px;
    height: 167px;
    transition: 0.5s;
    margin-left: 15px;
    position: absolute; 
    z-index:1;
    background: ${colors.white};
    border-radius: 3px;
    p {
        margin: 0;
        label {
            margin-left: 5px;
            font-size: 14px;
        }
    }
`;
export default class ThirdSelectBlock extends Component {
    
    render() {
        return (
            <Selectblock>
                <form>
                    <p><label><input type="checkbox"/>Все</label></p>
                    <p><label><input type="checkbox"/>XXL</label></p>
                    <p><label><input type="checkbox"/>XL</label></p>
                    <p><label><input type="checkbox"/>L</label></p>
                    <p><label><input type="checkbox"/>M</label></p>
                    <p><label><input type="checkbox"/>S</label></p>
                    <p><BtnSelect type="submit" value="Submit">Применить</BtnSelect></p>
                </form>
            </Selectblock>
        );
    }
}    