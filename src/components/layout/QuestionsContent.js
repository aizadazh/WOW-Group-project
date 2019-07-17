import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import Box from "./Box";

export default class Questions extends Component { 

    
  constructor( props ){
    super( props )
    this.state = { show : true };
    
    this.toggleDiv = this.toggleDiv.bind(this)
}

toggleDiv = () => {
    const { show } = this.state;
    this.setState( { show : !show } )
}

    render(){
      return (
        <Container> 
         <div class="container-fluid content-container">
          <div class="tab_div">
                <div class="tabs_menu">
                    <ul class="tabs">
                        <li id="tab1"> Tab 1 </li>
                        <li id="tabsName">Работа с сайтом</li>
                        <li id="tab2"> Tab 2 </li>
                        <li id="tab3"> Tab 3 </li>
                        <li id="tab4"> Tab 4 </li>
                        <li id="tab5"> Tab 5 </li>
                        <li id="tabsName1">Работа с заказом</li>
                        <li id="tab6"> Tab 6</li>
                        <li id="tab7"> Tab 7 </li>
                        <li id="tab8"> Tab 8 </li>
                        <li id="tab9"> Tab 9</li>
                        <li id="tab10"> Tab 10 </li>
                        <li id="tabsName2">Возврат</li>
                        <li id="tab11"> Tab 11 </li>
                        <li id="tab12"> Tab 12 </li>
                    </ul>
                </div>
                
                    </div>
                   
                    
            <div class="col-6 col-md-4">
              1 
            </div>
            <div class="col-12 col-md-8">
              2
            </div>
            </div>
            <div className="App-intro">
               
                <button onClick={ this.toggleDiv }>Toggle div</button>
                
                { this.state.show && <Box /> }
            </div>
           <p>Вопросы и ответы</p>
        </Container>
      );
    }
  }