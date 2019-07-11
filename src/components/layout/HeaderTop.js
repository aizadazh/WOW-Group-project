import React, { Component } from "react";
import styled from 'styled-components';
import { Container, Row, Col } from "styled-bootstrap-grid";
import {HeaderTopBox} from "../../Config/HeaderTopStyle"
import SearchInput from "./SearchInput";
import HeaderTopRight from "./HeaderTopRight";



const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  textDecoration: none;
`;
class HeaderTop extends Component {  
    render(){
      return (
        <Container> 
          <HeaderTopBox>
            <Row>
              <Col xs = "12" sm = "7" md = "7">
              <HeaderBlock>
                <SearchInput/>
                <HeaderTopRight/>
              </HeaderBlock> 
              </Col>
            </Row> 
          </HeaderTopBox>    
        </Container>
      );
    }
  }
export default HeaderTop;