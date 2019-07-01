import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CategoryCard from "../elements/CategoryСard";
import PrcardinSlider from "../elements/PrcardinSlider";
import ProductSlider from "../elements/ProductSlider"


export default class CategoryContent extends Component {  
    render(){
      return (
        <Container> 
            <CategoryCard/>
            <PrcardinSlider/>
            <ProductSlider/>
        </Container>
      );
    }
  }