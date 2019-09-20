import React, { Component } from "react";
import styled from 'styled-components';
import QABox from "./QABox";


let RightTab = styled.div`
width: 800px;
height: auto;
background: white;
position: relative;
left: 300px;    
top: -500px;
`;
class BoxForQA extends Component {
    
    render(){
        let { text } = this.props;
        return(
            <RightTab>{text} <QABox/> </RightTab>
        )
    }
}

export default BoxForQA;