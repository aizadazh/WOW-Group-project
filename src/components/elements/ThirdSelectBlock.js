import React, { Component } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import { colors} from "../../Config/Var";
//import {BtnSelect} from "./BtnSelect"

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
    constructor(props) {
		super(props);
        this.state = {
            checked: false
        };
        
        this.handlePriceCheckboxChange = this.handlePriceCheckboxChange.bind(this);
        }
    
        handlePriceCheckboxChange = e => {
            this.props.handlePriceCheckboxChange(e.target.value);
        //     const { name, value } = e.target
        //     this.setState({ 
        //         [name]: value 
        //     })
        }
    
    render() {
        const ischecked = this.props.ischecked;
        return (
            <Selectblock>
                <form>
                    <p><label><input
                        type="checkbox"
                        name="ALL"
                        checked={ischecked}
                        onChange={this.handlePriceCheckboxChange}
                     />Все</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="XXL"
                        checked={ischecked}
                        onChange={this.handlePriceCheckboxChange}
                    />XXL</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="XL"
                        checked={ischecked}
                        onChange={this.handlePriceCheckboxChange}
                    />XL</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="L"
                        checked={ischecked}
                        onChange={this.handlePriceCheckboxChange}
                    />L</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="M"
                        checked={ischecked}
                        onChange={this.handlePriceCheckboxChange}
                    />M</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="S"
                        checked={ischecked}
                        onChange={this.handlePriceCheckboxChange}
                    />S</label></p>
                </form>
            </Selectblock>
        );
    }
}
   