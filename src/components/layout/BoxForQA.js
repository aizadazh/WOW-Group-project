import React, { Component } from "react";
import styled from 'styled-components';

let RightTab = styled.div`
width: 800px;
height: 35px;
background: white;
position: relative;
left: 300px;
`;
class BoxForQA extends Component {
    
    render(){
        let { text } = this.props;
        return(
            <RightTab>{text}</RightTab>
        )
    }
}
export default BoxForQA;