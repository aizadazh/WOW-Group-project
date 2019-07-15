import React, { Component } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import { colors, } from "../../Config/Var";
import {BtnSelect} from "./BtnSelect"

const Selectblock = styled.div`
   width: 200px;
   height: 114px;
   transition: 0.5s;
   margin-left: 15px;
   padding: 0;
   position: absolute; 
   z-index:1;
   background: ${colors.white};
   border-radius: 3px;
   text-align: center;
   p {
       font-size: 14px;
       input {
           border-radius: 3px;
           border: 1px solid black;
           padding-left: 10px;


       }
   }
`;
export default class SecondSelectBlock extends Component {
    
    render() {
        return (
            <Selectblock>
                <form>
                    <p><label> От: <input placeholder="100$"/></label></p>
                    <p><label> До: <input placeholder="10000$"/></label></p>
                    <p><BtnSelect type="submit" value="Submit">Применить</BtnSelect></p>
                </form>
            </Selectblock>
        );
    }
}    