import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Layout} from "../components";
import FavoritesContent from "../components/layout/FavoritesContent";


class Favorites extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
                <FavoritesContent></FavoritesContent>
                
            </Container>
                </Layout>
       );
    }
  }
	export default Favorites;

