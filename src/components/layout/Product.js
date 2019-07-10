import React, { Component } from "react";
import { Container, Row } from "styled-bootstrap-grid";
import { BreadCrumbs } from "../elements"

class Product extends Component {  
    render(){
      return (
        <Container fluid = "true">
          <BreadCrumbs/>
            <Row>
              
            </Row>
        </Container>    
      )
    }
  }
export default Product