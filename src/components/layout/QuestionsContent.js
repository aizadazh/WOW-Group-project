
import React, { Component } from "react";
import { Container, Row } from "styled-bootstrap-grid";
import styled from 'styled-components';
import SearchTab from './SearchTab';
import { TabTitle, TabTitleQ } from "../../Config/TabStyle";
import { Link } from "react-router-dom";

const TabLeft= styled.div`
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

const TabRight= styled.div`
 width: 70%;
 height: auto;
 list-style: none;
 padding-top: 20%;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
 top: 20px;
 left: 50px;
`;

export default class Questions extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
    }
}
componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://wow.kg/crm/api/?action=list&object=api_faq"; 
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json.api_faq
        })
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

render() {
    let {isLoaded, items} = this.state;
    if (!isLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <Container>
              <Row>
              <TabLeft>
              <div class="container-fluid content-container">
              <div class="col-4 col-md-4">
                <Link to='/Questions' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 1</TabTitleQ></Link>
                <TabTitle>Работа с сайтом</TabTitle>
                <Link to='/Tabtwo' style={{ textDecoration: 'none' }}><TabTitleQ>Tab 2{items[0].q}</TabTitleQ></Link>
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
             </TabLeft>
             <TabRight>
               <div class="col-8 col-md-8">
                 <SearchTab/>              
               </div>
             </TabRight>
              </Row>
            </Container>
        );
    }
}
}
  




//<InnerDIv title="Lorem Ipsum is simply dummy text of the printing"/>