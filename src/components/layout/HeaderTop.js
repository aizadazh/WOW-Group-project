import React, { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";
import SearchInput from "./SearchInput";


class HeaderTop extends Component {  
    render(){
      return (
        <Container style = {{background: "#ccc"}}> 
          <Row>
            <Col xs = "12" sm = "7" md = "7">
              <SearchInput/>
            </Col>
          </Row>     
        </Container>
      );
    }
  }
export default HeaderTop;