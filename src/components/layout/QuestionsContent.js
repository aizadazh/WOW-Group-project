import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import InnerDIv from "./InnerDiv";

export default class Questions extends Component { 

  

    render(){
      return (
        <Container> 
         <div class="container-fluid content-container">
                      
            <div class="col-4 col-md-4">
              <InnerDIv title="Tab 1"/>
              <InnerDIv  title="Работа с сайтом"/>
              <InnerDIv  title="Tab 1" />
              <InnerDIv  title="Tab 1"/>
              <InnerDIv  title="Tab 1"/>
              <InnerDIv  title="Tab 1"/>
              <InnerDIv  title="Работа с заказом"/>
              <InnerDIv  title="Tab 1"/>
              <InnerDIv  title="Tab 1"/>
            </div>
            <div class="col-8 col-md-8">
              
            </div>
            </div>
           
          </Container>
      );
    }
  }