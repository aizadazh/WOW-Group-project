import React, { Component } from "react";
import styled from 'styled-components';

let RightTab = styled.div`
width: 800px;
height: 35px;
border: 3px solid white;
background: #E6E6E6;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.2);
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