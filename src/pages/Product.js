import React, { Component } from "react";
<<<<<<< HEAD
import { Row,Col } from "react-bootstrap";
=======
import { Container,Row,Col } from "styled-bootstrap-grid";
>>>>>>> master
import {Layout} from "../components";
import {BreadCrumbs,ProductSmallSlider} from "../components/elements";


class Product extends Component {  
    render(){
      return (
				<Layout>
          <Row>
            <BreadCrumbs/>
                <ProductSmallSlider/>
               
          </Row>   
				</Layout>
       
      );
    }
  }
	export default Product;

