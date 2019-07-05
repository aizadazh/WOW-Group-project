import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Layout} from "../components";
import AgreementContent from "../components/layout/AgreementContent";


class Agreement extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
                <AgreementContent>

                </AgreementContent>
                
            </Container>
        </Layout>
       );
    }
  }
	export default Agreement;

