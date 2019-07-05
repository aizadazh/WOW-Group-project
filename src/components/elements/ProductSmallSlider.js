import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import b1 from '../../static/images/banner1.jpg';

import leftArrow from '../../static/icons/left-chevron.png';
import rightArrow from '../../static/icons/right-chevron.png';

class ProductSmallSlider extends Component {
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
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrow: false
		};
		return (
					<SliderWrapper>
					<LeftArr onClick={this.previous}>
						<img src={leftArrow} alt="leftArrow" />
					</LeftArr>
					<Slider ref={(c) => (this.slider = c)} {...settings}>

						<SliderImgBox style = {{width: "5em",height:"5em",margin: "2em",padding:"1em"}} >
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox style = {{width: "5em",height:"5em",margin: "2em",padding:"1em"}} >
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox style = {{width: "5em",height:"5em",margin: "2em",padding:"1em"}} >
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox style = {{width: "5em",height:"5em",margin: "2em",padding:"1em"}} >
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox style = {{width: "5em",height:"5em",margin: "2em",padding:"1em"}} >
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox style = {{width: "5em",height:"5em",margin: "2em",padding:"1em"}} >
							<img src={b1} alt="slider" />
						</SliderImgBox>
					</Slider>
					
					<RightArr onClick={this.next}>
						<img src={rightArrow} alt="rightArrow" />
					</RightArr>
				</SliderWrapper>
	
		);
	}
}

const SliderWrapper = styled.div`
	width:500px;
	height:20px;
	margin:50px;
`;



const SliderImgBox = styled.div`
	height: 6em;
	width: 5em;
	margin:0;
	padding:0 1em;
	border-radius: 5px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`;

const LeftArr = styled.div`
	cursor: pointer;
	position: absolute;
	top: 40%;
	left: -1em;
	z-index: 100;
	width: 1em;
	height: 2.5em;
	img {
		width: 100%;
		height: 100%;
	}
`;
const RightArr = styled.div`
	cursor: pointer;
	position: absolute;
	top: 40%;
	left: 100%;
	z-index: 100;
	width: 1em;
	height: 2.5em;
	img {
		width: 100%;
		height: 100%;
	}
`;

export default ProductSmallSlider;
