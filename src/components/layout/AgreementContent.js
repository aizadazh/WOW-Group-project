import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";
import { colors } from "../../Config/Var";

const MainBox = styled.div`
    background: ${colors.grey_1};
    font-family: ${props => props.theme.font};
`;
const TextBox = styled.div`
    padding: 1px 35px 1px 55px;
    font-family: ${props => props.theme.font};
`;
const UlAgreement = styled.ul`
    padding-left: 17px;
`;
const LiAgreement = styled.li`
    list-style: disc;
`;
const H2Agreement = styled.h2`
    font-family: ${props => props.theme.font};
    font-size: 1.8rem; 
    font-weight: 600; 
    color: ${colors.black_1};
`;
const H3Agreement = styled.h3`
    font-family: ${props => props.theme.font};
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1};
    line-height: 24px; 
    margin-top: 15px; 
`;
const H4Agreement = styled.h4`
    font-family: ${props => props.theme.font}; 
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1}; 
    line-height: 24px; 
    margin-top: 15px; 
`;
const PAgreement = styled.p`
    font-family: ${props => props.theme.font};
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1}; 
    line-height: 24px; 
    margin-top: 15px; 
`;
const AAgreement = styled.a`
    font-family: ${props => props.theme.font}; 
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1};
    line-height: 24px; 
    margin-top: 15px; 
    &:hover {
        color: ${colors.srh};   
    }
`;
const theme = {
    font: "Roboto"
  };

export default class Agreement extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/agreements/get`)
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json.agreements,
            })
        });
    }
    render() {  let {isLoaded, items} = this.state;
    if (!isLoaded) {
        return <div>Loading... </div>
    }
    else{
    return (
               <>
                        {items.map(item => (
                         <span key={item.id}>                    
                          <H2Agreement>{item.content}</H2Agreement> 
                        <H4Agreement>{item.contacts}</H4Agreement>                      
                      </span>                
                     ))}
                 </>
      );
    }
  }
}

