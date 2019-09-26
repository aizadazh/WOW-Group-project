import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import {Layout} from "../components";
import Tableft from "../components/layout/Tableft";
import InnerDiv from "../components/layout/InnerDiv";
import { Tabright, TabTitleText } from "../Config/TabStyle";

class Tabthree extends Component {  
    
    render(){
      return (
        <Layout>
            <Container> 
                <Tableft/>
                <Tabright>
                    <TabTitleText>тема</TabTitleText>
                    <InnerDiv title="Lorem ipsum dolor sit amet, consetet ur adipiscing elit?"></InnerDiv>
                    <InnerDiv title="Lorem ipsum dolor sit amet, consetet ur adipiscing elit?"></InnerDiv>
                    <InnerDiv title="Lorem ipsum dolor sit amet, consetet ur adipiscing elit?"></InnerDiv>
                </Tabright>
            </Container> 
        </Layout>
       );
    }
  }
	export default Tabthree;

