import React, { Component } from "react";
import styled from 'styled-components';

let RightTab = styled.div`
    width: 850px;
    height: 60px;
    border: 3px solid white;
    background: white;
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    left: 0px;
    padding-left: 30px;
    top: 12px;
    left: -32px;
    font-size: 0.9rem;
    color: #3a3a3ade;
`;
class Box extends Component {
    
    render(){
        let { text } = this.props;
        return(
            <RightTab>{text}</RightTab>
        )
    }
}
export default Box;