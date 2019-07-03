import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class Basket extends Component {  
    render(){
      return (
        <Container>
           <Col sm={6} md={4} lg={3} xl={3}>
                        Моя корзина
                            
           </Col>
           </Container>
      );
    }
  }