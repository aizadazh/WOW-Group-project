import React, { Component } from "react";
import { Row,Col } from "react-bootstrap";
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

