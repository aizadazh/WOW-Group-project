import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import {Layout} from "../components";
import BasketContent from "../components/layout/BasketContent";


class Basket extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
                <BasketContent></BasketContent>
                
            </Container>
                </Layout>
       );
    }
  }
	export default Basket;

