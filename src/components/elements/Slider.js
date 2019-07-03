import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import b1 from "../../static/images/banner1.jpg";
import b2 from "../../static/images/banner2.jpg";
import b3 from "../../static/images/banner3.jpg";
import leftArrow from "../../static/icons/arrow-left.png";
import rightArrow from "../../static/icons/arrow-right.png";

class MainSlider extends Component {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
       };
      return (
        <Container>
          <SliderWrapper>
            <Slider ref={c => (this.slider = c)} {...settings}>              
              <img src={b1} alt="slider"/>
              <img src={b2} alt="slider"/>
              <img src={b3} alt="slider"/>              
            </Slider>
            <LeftArr onClick={this.previous}>                
              <img src={leftArrow} alt="leftArrow" /> 
            </LeftArr>
            <RightArr onClick={this.next}>                  
              <img src={rightArrow} alt="rightArrow" />
            </RightArr>
          </SliderWrapper>
        </Container>
      )
    };
  }
  
  const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 95vw;
  height:50vh;
  position: relative;
  `;
  const LeftArr = styled.button`
    padding: 0;
    border: none; 
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 5%;
    z-index: 100;
    `;
    const RightArr = styled.button`
    padding: 0;
    border: none; 
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 90%;
    z-index: 100;
    `;
  
export default MainSlider;
