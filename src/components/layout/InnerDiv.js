import React, { Component } from "react";
import { Container, Row } from "styled-bootstrap-grid";
import Box from "./Box";
import styled from 'styled-components';

let Qatab = styled.div`
    width: 850px;
    height: 35px;
    border: 3px solid white;
    background: #E6E6E6;
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    left: 40px;
    padding-left: 30px;
    font-size: 1.1rem;
    top: 20px;
    font-weight: 500;
    color: #3a3a3ade;
    margin-bottom: 28px;
`;
export default class InnerDiv extends Component { 

  constructor( props ){
    super( props )
    this.state = { show : false };
    
    this.toggleDiv = this.toggleDiv.bind(this)
}

toggleDiv = () => {
    const { show } = this.state;
    this.setState( { show : !show } )
}

    render(){
        let {title} = this.props;
      return (
        <Container> 
          <Row>
            <div class="col-4 col-md-4">
                <div className="App-intro">
               <Qatab> <div onClick={ this.toggleDiv }>{title}</div>
                { this.state.show && <Box text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th"/> }
               </Qatab> </div>  
              
            </div>
          
          </Row>
        </Container>
      );
    }
  }

