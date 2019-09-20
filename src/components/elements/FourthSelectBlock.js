import React, { Component } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import { colors} from "../../Config/Var";
//import { BtnSelect } from "./BtnSelect";

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
        span{
            width: 10px;
            height:10px;
            border-radius: 50px;
            border: 1px solid black;
            display: inline-block;
            margin: 0 3px;
            }
        }
        
    }
`;
export default class FourthSelectBlock extends Component {
    constructor(props) {
		super(props);
        this.state = {
            checked: true
        };
        
        this.handleColorCheckboxChange = this.handleColorCheckboxChange.bind(this);
        }
    
        handleColorCheckboxChange = e => {
            this.props.handleColorCheckboxChange(e.target.checked.value);
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
                    onChange={() => this.props.handleColorCheckboxChange}/>
                    Все</label></p>

                    <p><label><input 
                        type="checkbox"
                        name="ALL"
                        checked={checked}
                        onChange={() => this.props.handleColorCheckboxChange}/>
                    <span style={{background: "black"}}/>
                    Черный</label><span/></p>

                    <p><label><input 
                        type="checkbox"
                        name="ALL"
                        checked={checked}
                        onChange={() => this.props.handleColorCheckboxChange}/>
                    <span style={{background: "white"}}/>
                    Белый</label></p>

                    <p><label><input 
                        type="checkbox"
                        name="ALL"
                        checked={checked}
                        onChange={() => this.props.handleColorCheckboxChange}/>
                    <span style={{background: "red"}}/>
                    Красный</label></p>

                    <p><label><input 
                        type="checkbox"
                        name="ALL"
                        checked={checked}
                        onChange={() => this.props.handleColorCheckboxChange}/>
                    <span style={{background: "green"}}/>
                    Зеленый</label></p>

                    <p><label><input 
                        type="checkbox"
                        name="ALL"
                        checked={checked}
                        onChange={() => this.props.handleColorCheckboxChange}/>
                    <span style={{background: "yellow"}}/>
                    Желтый</label></p>
                </form>
            </Selectblock>
        );
    }
}    