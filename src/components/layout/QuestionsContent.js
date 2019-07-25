import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import InnerDIv from "./InnerDiv";
import styled from 'styled-components';

const TabLeft= styled.div`
 background: white;
 width: 20%;
 height: auto;
 list-style: none;
 padding-top: 1%;
 vertical-align: baseline;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
`;

const TabRight= styled.div`
 background: white;
 width: 80%;
 height: auto;
 list-style: none;
 padding-top: 1%;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
`;


export default class Questions extends Component { 

    render(){
      return (
        <Container> 
           <TabLeft>
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
          </TabLeft>
          <TabRight>
        
          </TabRight>
        </Container>
      );
    }
  }