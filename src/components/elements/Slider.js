import React, { Component } from "react";
import { Container, Row } from "styled-bootstrap-grid";
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
        adaptiveHeight: true,
       };
      return (
        <Container>
          <Row>
            <SliderWrapper>
              <Slider ref={c => (this.slider = c)} {...settings}>              
                <Img src={b1} alt="slider"/>
                <Img src={b2} alt="slider"/>
                <Img src={b3} alt="slider"/>              
              </Slider>
              <LeftArr onClick={this.previous}>                
                <img src={leftArrow} alt="leftArrow" /> 
              </LeftArr>
              <RightArr onClick={this.next}>                  
                <img src={rightArrow} alt="rightArrow" />
              </RightArr>
            </SliderWrapper>
          </Row>
        </Container>
      )
    };
  }
  
  const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    `;
  const Img= styled.img`   
    width: auto;
    height: 40em;   
    `;

  const LeftArr = styled.button`
    padding: 0;
    border: none; 
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 40%;
    left: 5%;
    z-index: 100;
    `;
    const RightArr = styled.button`
    padding: 0;
    border: none; 
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 40%;
    left: 90%;
    z-index: 100;
    `;
  
export default MainSlider;
