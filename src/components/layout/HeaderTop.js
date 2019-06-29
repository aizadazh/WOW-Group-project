import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SearchInput from "./SearchInput";


class HeaderTop extends Component {  
    render(){
      return (
        <Container> 
            <SearchInput/>
           
        </Container>
      );
    }
  }
export default HeaderTop;