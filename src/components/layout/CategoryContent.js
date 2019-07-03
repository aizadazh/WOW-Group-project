import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ProductCardBox from "../elements/ProductCardsBox";
import ProductSlider from "../elements/ProductSlider"


export default class CategoryContent extends Component {  
    render(){
      return (
        <Container> 
            <ProductCardBox/>
            <ProductSlider/>
        </Container>
      );
    }
  }