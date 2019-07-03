import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Layout} from "../components";
import QuestionsContent from "../components/layout/QuestionsContent";


class Questions extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
               <QuestionsContent>
                 
               </QuestionsContent>
                
            </Container>
                </Layout>
       );
    }
  }
	export default Questions;

