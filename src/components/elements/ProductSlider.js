import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { colors, font_size} from "../../Config/Var";
import PrcardinSlider from "./PrcardinSlider";
import { Container } from "react-bootstrap";
// import SliderIconRight from "../../static/icons/rightt-chevron.png";
// import SliderIconLeft from "../../static/icons/left-chevron.png";

//import { Container } from "react-bootstrap";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
                display: "block", 
                opacity: "0", 
                height: "40px", 
                width: "19px", 
               
                }}
        onClick={onClick}
      />
    );
  }


const GlobalSliderCont = styled.div `
    margin: 0 200px;
    width: 1500px;
`;

const PrslideContainer = styled.div`
    margin: 0;
    width: 1210px;
`;
// const SlideNext= styled.div`
//     background: inherit; 
//     background-image: url(${SliderIconRight}); 
//     background-size: cover !important; 
//     position: absolute; 
//     bottom: 52%; 
//     right: -18px; 
//     height: 40px; 
//     width: 19px; 
// `;
// const SlidePrew= styled.div`
//     background: inherit; 
//     background-image: url(${SliderIconLeft}); 
//     background-size: cover !important; 
//     position: absolute; 
//     bottom: 52%; 
//     left: -20px; 
//     height: 40px; 
//     width: 19px; 
// `;
const SlTitle = styled.h2`
    font-family: Roboto;
    font-weight: 600;
    font-size: ${font_size.sl_title};
    color: ${colors.dark_1};
    margin-bottom: ${font_size.sl_title};
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.dark_1};
`;

export default class ProductSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
        <Container>
            <GlobalSliderCont>
                <PrslideContainer>
                    <SlTitle> Наши предложения</SlTitle>
                    <Slider {...settings}>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                        <PrcardinSlider/>
                    </Slider>
                </PrslideContainer>
            </GlobalSliderCont>
        </Container>
        
    );
  }
}
