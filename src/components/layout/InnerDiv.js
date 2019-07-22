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
                <button onClick={ this.toggleDiv }>{title}</button>
                    { this.state.show && <Box text="aasdfasdfasdfasdf"/> }
              </div> 
            </div>
            <div class="col-8 col-md-8">
              
            </div>
            </div>
           
          </Container>
      );
    }
  }