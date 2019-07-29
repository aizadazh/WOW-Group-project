import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import {Layout} from "../components";
//import AgreementContent from "../components/layout/AgreementContent";
import PostList from "../components/layout/PostList";


class Agreement extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
                <PostList/>
                              
            </Container>
        </Layout>
       );
    }
  }
 export default Agreement;