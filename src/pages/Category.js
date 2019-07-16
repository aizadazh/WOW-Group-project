import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import CategoryContent from "../components/layout/CategoryContent";
import Layout from "../components/layout/Layout";


export default class CategoryPage extends Component{
  render(){
    return (
      <Layout>
        <Container fluid>
          <CategoryContent/>
        </Container>
         
      </Layout>
    )
  }
}


  
