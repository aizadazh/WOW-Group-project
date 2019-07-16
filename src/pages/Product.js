import React, { Component } from "react";
import {Container, Row} from "styled-bootstrap-grid";
import {Layout} from "../components";
import {ProductSmallSlider} from "../components/elements";



class Product extends Component {  
    render(){
      return (
				<Layout>
          {/* <Container>
          <Row> */}
           
                <ProductSmallSlider/>
               
          {/* </Row>  
          </Container>  */}
				</Layout>
       
      );
    }
  }
	export default Product;

