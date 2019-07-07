import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Layout} from "../components";
import FormContent from "../components/layout/FormContent";

class Form extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
                <FormContent></FormContent>
                
            </Container>
                </Layout>
       );
    }
  }
	export default Form;

