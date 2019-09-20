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
            checked: true
        };
        
        this.handleSizeCheckboxChange = this.handleSizeCheckboxChange.bind(this);
        }
    
        handleSizeCheckboxChange = e => {
            this.props.handleSizeCheckboxChange(e.target.checked.value);
            this.setState({
                checked: !this.state.checked})
        }
    
    render() {
        const checked = this.props.checked;
        return (
            <Selectblock>
                <form>
                    <p><label><input
                        type="checkbox"
                        name="ALL"
                        checked={checked}
                        onChange={() => this.props.handleSizeCheckboxChange}
                     />Все</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="XXL"
                        checked={checked}
                        onChange={() => this.props.handleSizeCheckboxChange}
                    />XXL</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="XL"
                        checked={checked}
                        onChange={() => this.props.handleSizeCheckboxChange}
                    />XL</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="L"
                        checked={checked}
                        onChange={() => this.props.handleSizeCheckboxChange}
                    />L</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="M"
                        checked={checked}
                        onChange={() => this.props.handleSizeCheckboxChange}
                    />M</label></p>
                    <p><label><input 
                        type="checkbox"
                        name="S"
                        checked={checked}
                        onChange={() => this.props.handleSizeCheckboxChange}
                    />S</label></p>
                    <p>Состояние: {this.state.checked ? 'отмечен' : 'не отмечен'}</p>
                </form>
            </Selectblock>
        );
    }
}
   