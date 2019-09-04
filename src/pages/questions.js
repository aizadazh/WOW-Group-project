import React, { Component } from "react";
import { Container} from "styled-bootstrap-grid";
import {Layout} from "../components";
import QuestionsContent from "../components/layout/QuestionsContent";
import Qa from "../components/layout/Qa";

class Questions extends Component {  
    render(){
      return (
        <Layout>
            <Container> 
               <QuestionsContent>
                 <Qa/>
               </QuestionsContent>
                
            </Container>
                </Layout>
       );
    }
  }
	export default Questions;

