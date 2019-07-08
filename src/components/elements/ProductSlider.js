import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { colors, font_size} from "../../Config/Var";
import PrcardinSlider from "./PrcardinSlider";
import { Container } from "react-bootstrap";
import SliderIconRight from "../../static/icons/right-chevron.png";
import SliderIconLeft from "../../static/icons/left-chevron.png";


const GlobalSliderCont = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const PrslideContainer = styled.div`
    margin: 0 auto;
    width: 75%;
`;
const SlideNext= styled.div`
    background: inherit; 
    background-size: cover !important; 
    position: absolute; 
    margin-top: 200px; 
    margin-left: 1380px; 
    height: 40px; 
    width: 19px; 
    cursor: pointer; 
`;
const SlidePrew= styled.div`
    background: inherit; 
    background-size: cover !important; 
    position: absolute; 
    margin-top: 200px; 
    margin-left: 150px; 
    height: 40px; 
    width: 19px;
    cursor: pointer; 
`;
const SlTitle = styled.h2`
    font-family: Roboto;
    font-weight: 600;
    font-size: ${font_size.sl_title};
    color: ${colors.dark_1};
    margin-bottom: ${font_size.sl_title};
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.dark_1};
`;
export default class PreviousNextMethods extends Component {
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
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <GlobalSliderCont>
          <SlidePrew onClick={this.previous}>
            <img src={SliderIconLeft} alt="prew" style={{ width: "100%" }}/>
          </SlidePrew>
            <PrslideContainer>
              <SlTitle> Наши предложения</SlTitle>
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
      </Container>
    );
  }
}
