import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Slider from "react-slick";
import { colors } from "../../Config/Var";
import Card from "./Card";
import SliderIconRight from "../../static/icons/right-chevron.png";
import SliderIconLeft from "../../static/icons/left-chevron.png";
import { Link } from "react-router-dom";


const GlobalSliderCont = styled.div`    
    display: flex;
    justify-content: space-between;
    width: 65%; 
    float: left;   
`;

const SectionContainer = styled.div`   
    width: 120%;
    
`;
const SlideNext= styled.div`    
    position: absolute; 
    margin-top: 10%; 
    margin-left: 61%; 
    height: 3em; 
    width: 1.5em; 
    cursor: pointer; 
`;
const SlidePrew= styled.div`    
    position: absolute; 
    margin-top: 10%; 
    margin-left: -2%; 
    height: 3em; 
    width: 1.5em;
    cursor: pointer; 
`;
const SectionAllTitles = styled.div`
  display: flex;
`;
const SectionTitle = styled.h2`
    font-family: Roboto;
    font-weight: 500;
    font-size: 1.5em;
    color: ${colors.dark_1};
    cursor: pointer;
    text-decoration: none; 
    margin-right: 1.5rem;     
    a {
      text-decoration: none;
      color: ${colors.dark_1};
      &:hover{
        color: ${colors.grey_3};
      } 
    }
`;
const NewTitle = styled.h4`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.2em;
  color: ${colors.grey_3};
  cursor: pointer;
  text-decoration: none;
  margin-right: 1.5rem;        
  a {
    text-decoration: none;
    color: ${colors.grey_3};
    &:hover{
      color: ${colors.black_1};
    } 
  }
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
            <GlobalSliderCont>
            <SlidePrew onClick={this.previous}>
                <img src={SliderIconLeft} alt="prew" style={{ width: "100%" }}/>
            </SlidePrew>
            <SectionContainer> 
              <SectionAllTitles>
                <SectionTitle><Link to="/">Женская одежда</Link></SectionTitle>
                <NewTitle><Link to="/">Новинки</Link></NewTitle>
                <NewTitle><Link to="/">Смотреть все</Link></NewTitle>
              </SectionAllTitles>                       
              <Slider ref={c => (this.slider = c)} {...settings}>
                  <Card />                  
                  <Card />
                  <Card />
                  <Card />
                  <Card />                 
              </Slider>
            </SectionContainer>
            <SlideNext onClick={this.next} >
            <img src={SliderIconRight} alt="next" style={{ width: "100%" }}/>
            </SlideNext>
        </GlobalSliderCont>
      </Container>
    );
  }
}
export default WomenSlider;