import React, { Component } from "react";
import { Container } from "styled-bootstrap-grid";
import Slider from "../elements/Slider";
import WomenSlider from "../elements/WomenSlider";
import SideBarCard from "../elements/SideBarCard";


class MainContent extends Component {  
    render(){
      return (
        <Container> 
            <Slider />
            <WomenSlider /> 
            <SideBarCard />                    
            
        </Container>
      );
    }
  }
  export default MainContent;