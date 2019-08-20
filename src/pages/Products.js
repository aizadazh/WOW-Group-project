import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row} from "styled-bootstrap-grid";
import {Layout} from "../components";
import CategoryCard from "../components/elements/CategoryСard";
import Product from "./Product";
//import {ProductSmallSlider,ProductInfo} from "../components/elements";



class ProductPage extends Component {  
    render(){
      return (
				<Layout>
          <Container>
          <Row>
           <Router>
              <Route exact path="/products" component={CategoryCard} />
              <Route path="/products/:id" component={Product} />
           </Router>
          </Row>  
          </Container> 
				</Layout>
       
      );
    }
  }
	export default ProductPage;

