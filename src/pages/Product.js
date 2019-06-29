import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Layout} from "../components";


class Product extends Component {  
    render(){
      return (
				<Layout>
					 <Container> 
            <h1>Product Page</h1>
        </Container>
				</Layout>
       
      );
    }
  }
	export default Product;

