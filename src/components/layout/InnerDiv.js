import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import Box from "./Box";

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
          <div class="container-fluid content-container">
            <div class="col-4 col-md-4">
              <div className="App-intro">
                <div onClick={ this.toggleDiv }>{title}</div>
                    { this.state.show && <Box text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"/> }
              </div> 
            </div>
          <div class="col-8 col-md-8">
              
          </div>
          </div>
        </Container>
      );
    }
  }