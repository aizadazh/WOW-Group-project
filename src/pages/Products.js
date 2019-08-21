import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
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
           <Switch>
              <Route exact path="/products" component={CategoryCard} />
              <Route path="/products/:id" component={Product} />
           </Switch>
          </Row>  
          </Container> 
				</Layout>
       
      );
    }
  }
	export default ProductPage;

