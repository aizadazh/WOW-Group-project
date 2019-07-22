import React, { Component } from "react";
import {Row, Container} from "styled-bootstrap-grid";
import ProductSlider from "../elements/ProductSlider";
import CategoryBlock from "../elements/CategoryBlock";





export default class CategoryContent extends Component {  
    render(){
      return (
          <Container> 
            <Row>
              <CategoryBlock/>           
              <ProductSlider sliderTitle = "Наши предложения" showCount = "5"/>
            </Row>
          </Container>
      );
    }
  }