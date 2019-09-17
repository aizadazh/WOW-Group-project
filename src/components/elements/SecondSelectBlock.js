import React, { Component } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import { colors, } from "../../Config/Var";
//import {BtnSelect} from "./BtnSelect"
//import ProductCardBox from "./ProductCardsBox";

const Selectblock = styled.div`
   width: 220px;
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
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            price1:"",
            price2:"",
        };
        this.handlePriceChange = this.handlePriceChange.bind(this);
        console.log("!!!!!!!!!!!!!!!!!!!!");
        console.log(this.props);
    }
    handlePriceChange = e => {
        const { name, value } = e.target
        this.setState({ 
            [name]: value 
        })
    }
          
    render() {
        return (
            <Selectblock>
                <form>
                    <p><label> От: <input 
                    type="number"
                    name="price1"
                    value={this.state.name}
                    onChange={this.handlePriceChange}
                    placeholder="100"/></label></p>

                    <p><label> До: <input
                    type="number"
                    name="price2"
                    value={this.state.name}
                    onChange={this.handlePriceChange}
                    placeholder="10000"/></label></p>
                </form>
            </Selectblock>
        );
    }
}  