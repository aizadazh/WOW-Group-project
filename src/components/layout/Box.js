import React, { Component } from "react";
import styled from 'styled-components';

let RightTab = styled.div`
width: 400px;
height: 50px;
border: 1px solid;
position: relative;
left: 30%;
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