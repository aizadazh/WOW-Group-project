import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ProductSlider from "../elements/ProductSlider";
import CategoryBlock from "../elements/CategoryBlock";





export default class CategoryContent extends Component {  
    render(){
      return (
        <Container> 
            <CategoryBlock/>           
            <ProductSlider/>
        </Container>
      );
    }
  }