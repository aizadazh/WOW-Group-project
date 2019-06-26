import React, { Component } from "react";
import Slider from "react-slick";
import b1 from "../../static/images/banner1.jpg";
import b2 from "../../static/images/banner2.jpg";
import b3 from "../../static/images/banner3.jpg";
import { Container } from "react-bootstrap";

class Slider extends Component {
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

        </Container>


export default Slider;