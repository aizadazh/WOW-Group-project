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
        
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        }
    
        handleCheckboxChange = e => {
            const { name, value } = e.target
            this.setState({ 
                [name]: value 
            })
        }
    
    render() {
        return (
            <Selectblock>
                <form>
                    <p><label><input
                        type="checkbox"
                        name="ALL"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                     />Все</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="XXL"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />XXL</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="XL"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />XL</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="L"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />L</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="M"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />M</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="S"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />S</label></p>
                </form>
            </Selectblock>
        );
    }
}
   