import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { colors } from "../../Config/Var";
import PrcardinSlider from "./PrcardinSlider";
import { Container, Row } from "styled-bootstrap-grid";
import SliderIconRight from "../../static/icons/right-chevron.png";
import SliderIconLeft from "../../static/icons/left-chevron.png";


const GlobalSliderCont = styled.div`    
    display: flex;
    justify-content: space-between;
    float: left;
    width: 70%;    
`;

const PrslideContainer = styled.div`   
    width: 100%;
    margin-left: 4.5rem;
    
`;
const SlideNext= styled.div`    
    position: absolute; 
    margin-top: 11%; 
    margin-left: 75%; 
    height: 3em; 
    width: 1.5em; 
    cursor: pointer; 
`;
const SlidePrew= styled.div`    
    position: absolute; 
    margin-top: 11%; 
    margin-left: 3%; 
    height: 3em; 
    width: 1.5em;
    cursor: pointer; 
`;
const SlTitle = styled.h2`
    font-family: Roboto;
    font-weight: 500;
    font-size: 1.5em;
    color: ${colors.dark_1};   
`;


class WomenSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <Container>
          <Row>
            <GlobalSliderCont>
            <SlidePrew onClick={this.previous}>
                <img src={SliderIconLeft} alt="prew" style={{ width: "100%" }}/>
            </SlidePrew>
                <PrslideContainer>
                <SlTitle>Женская одежда</SlTitle>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <PrcardinSlider key={1}/>
                    <PrcardinSlider key={2}/>
                    <PrcardinSlider key={3}/>
                    <PrcardinSlider key={4}/>
                    <PrcardinSlider key={5}/>
                    <PrcardinSlider key={6}/>
                    <PrcardinSlider key={7}/>
                    <PrcardinSlider key={8}/>
                </Slider>
                </PrslideContainer>
                <SlideNext onClick={this.next} >
                <img src={SliderIconRight} alt="next" style={{ width: "100%" }}/>
                </SlideNext>
            </GlobalSliderCont>
        </Row>
      </Container>
    );
  }
}
export default WomenSlider;