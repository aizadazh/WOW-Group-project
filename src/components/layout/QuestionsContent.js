
import React, { Component } from "react";
import { Container, Row } from "styled-bootstrap-grid";
//import InnerDIv from "./InnerDiv";
import styled from 'styled-components';
import SearchTab from './SearchTab';
import { TabTitle, TabTitleQ } from "../../Config/TabStyle";


const TabLeft= styled.div`
 padding-top: 20%;
 background: white;
 width: 20%;
 left: 20%;
 height: auto;
 list-style: none;
 vertical-align: baseline;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
 top: 20px;
`;

const TabRight= styled.div`
 background: white;
 width: 70%;
 right: 70%;
 height: auto;
 list-style: none;
 padding-top: 20%;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
 top: 20px;
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
    const url = "http://wow.kg/crm/api/?action=view&object=api_articles&id=64"; 
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json.api_articles
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
                <TabTitleQ>Tab 1</TabTitleQ>
                <TabTitle>Работа с сайтом</TabTitle>
                <TabTitleQ>Tab 2{items.menu}{items.id}</TabTitleQ>
                <TabTitleQ>Tab 3</TabTitleQ>
                <TabTitleQ>Tab 4</TabTitleQ>
                <TabTitleQ>Tab 5</TabTitleQ>
                <TabTitle>Работа с заказом</TabTitle>
                <TabTitleQ>Tab 6</TabTitleQ>
                <TabTitleQ>Tab 7</TabTitleQ>
                <TabTitleQ>Tab 8</TabTitleQ>
                <TabTitleQ>Tab 9</TabTitleQ>
                <TabTitleQ>Tab 10</TabTitleQ>
                <TabTitle>Возврат</TabTitle>
                <TabTitleQ>Tab 11</TabTitleQ>
                <TabTitleQ>Tab 12</TabTitleQ>
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