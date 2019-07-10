import React, { Component } from "react";
import { Container,Row,Col } from "styled-bootstrap-grid";
import {Layout} from "../components";
import {BreadCrumbs,ProductSmallSlider} from "../components/elements";


class Product extends Component {  
    render(){
      return (
				<Layout>
					 <Container fluid = "true">
                <BreadCrumbs/>
                <Row>
                  <Col lg ={5} md = {12} sm = {12} xl = {5}>
                      <ProductSmallSlider/>
                  </Col>
                 
                </Row>
            </Container> 
				</Layout>
       
      );
    }
  }
	export default Product;

