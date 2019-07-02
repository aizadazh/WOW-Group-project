import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import b1 from "../../static/images/banner1.jpg";
import b2 from "../../static/images/banner2.jpg";
import b3 from "../../static/images/banner3.jpg";

class MainSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return (
        <Container>
          <SliderWrapper>
            <Slider {...settings}>
              <img src={b1} alt="slider"/>
              <img src={b2} alt="slider"/>
              <img src={b3} alt="slider"/>
            </Slider>
          </SliderWrapper>
        </Container>
      )
    };
  }

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 95vw;
  height:50vh;
  `;

export default MainSlider;
