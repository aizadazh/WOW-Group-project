import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import {Layout} from "../components";
//import AgreementContent from "../components/layout/AgreementContent";
import PostList from "../components/layout/PostList";


class Agreement extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      agreement_id: props.match.params.id
    };
  }
  
  
  render(){
      return (
        <Layout>
            <Container> 
                <PostList agreement_id={this.state.agreement_id}/>
                              
            </Container>
        </Layout>
       );
    }
  }
 export default Agreement;