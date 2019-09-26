import React, { Component } from "react";
import { TabTitle, TabTitleQ } from "../../Config/TabStyle";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Container, Row } from "styled-bootstrap-grid";


const TabsLeft= styled.div`
 padding-top: 20%;
 width: 20%;
 left: 20%;
 height: auto;
 list-style: none;
 vertical-align: baseline;
 margin: 30px 0 0 -35px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
 top: 20px;
 right: 50px;
`;

class TabLeft extends Component { 
  
render() {
       return (
        <Container>
        <Row>
           <TabsLeft>
            <div class="container-fluid content-container">
            <div class="col-4 col-md-4">
            <Link to='/Questions' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 1</TabTitleQ></Link>
            <TabTitle>Работа с сайтом</TabTitle>
            <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 2</TabTitleQ></Link>
            <Link to='/Tabthree' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 3</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 4</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 5</TabTitleQ></Link>
                <TabTitle>Работа с заказом</TabTitle>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 6</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 7</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 8</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 9</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 10</TabTitleQ></Link>
                <TabTitle>Возврат</TabTitle>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 11</TabTitleQ></Link>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 12</TabTitleQ></Link>
            
            </div>
            </div>
            </TabsLeft>
            </Row>
            </Container>
        );
  }
}
  
export default TabLeft

