import React, { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";
import {HeaderTopBox} from "../../Config/HeaderTopStyle"
import SearchInput from "./SearchInput";



class HeaderTop extends Component {  
    render(){
      return (
        <Container> 
          <HeaderTopBox>
            <Row>
              <Col xs = "12" sm = "7" md = "7">
                <SearchInput/>
              </Col>
              
            </Row> 
          </HeaderTopBox>    
        </Container>
      );
    }
  }
export default HeaderTop;