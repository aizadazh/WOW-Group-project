import React, { Component } from "react";
import styled from 'styled-components';

let Nitro = styled.div`
width: 400px;
height: 300px;
border: 1px solid;
position: relative;
left: 30%;
`;
class Box extends Component {
    
    render(){
        let { text } = this.props;
        return(
            <Nitro>{text}</Nitro>
        )
    }
}
export default Box;