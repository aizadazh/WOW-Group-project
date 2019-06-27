import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CategoryCard from "../components/layout/CategoryCard";

export default class Category extends Component {  
    render(){
      return (
        <Container> 
            <CategoryCard /> 
        </Container>
      );
    }
  } 
  
