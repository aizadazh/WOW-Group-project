import React, { Component } from "react";
import { Container, Row} from "styled-bootstrap-grid";
import {Layout} from "../components";
import {BreadCrumbs , ProductSmallSlider,ProductInfo} from "../components/elements";



class Product extends Component {  
    render(){
      return (
				<Layout>
         <Container fluid style = {{background: "#f8f9fa"}}>
          <Row>
              <ProductSmallSlider/>  
              <ProductInfo/>
                       
          </Row>   
          </Container>
				</Layout>
       
      );
    }
  }
	export default Product;

