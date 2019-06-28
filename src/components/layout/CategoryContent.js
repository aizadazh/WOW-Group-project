import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CategoryCard from "../elements/CategoryСard";


export default class CategoryContent extends Component {  
    render(){
      return (
        <Container> 
            <CategoryCard/>
        </Container>
      );
    }
  }