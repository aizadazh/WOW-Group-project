import React, { Component } from "react";
import {Container,Row,Col} from "react-bootstrap";
import {BreadCrumbs} from "../elements"

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