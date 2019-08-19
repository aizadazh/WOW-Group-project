import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import CategoryContent from "../components/layout/CategoryContent";
import Layout from "../components/layout/Layout";


export default class CategoryPage extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      category_id: props.match.params.id
    };
  }
  render() {
    return (
      <Layout>
        <Container fluid>
          <CategoryContent category_id={this.state.category_id}/>
        </Container>
      </Layout>
    )
  }
}


  
