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
			autoplaySpeed: 2000
		};
		return (
					<>
					<Slider ref={(c) => (this.slider = c)} {...settings}>
						<SliderImgBox>
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox>
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox>
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox>
							<img src={b1} alt="slider" />
						</SliderImgBox>
						<SliderImgBox>
							<img src={b1} alt="slider" />
						</SliderImgBox>
					</Slider>
					<LeftArr onClick={this.previous}>
						<img src={leftArrow} alt="leftArrow" />
					</LeftArr>
					<RightArr onClick={this.next}>
						<img src={rightArrow} alt="rightArrow" />
					</RightArr>
				</>
	
		);
	}
}

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
	top: 4em;
	left: -10%;
	z-index: 100;
	width: 2em;
	height: 3.5em;
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
	width: 2em;
	height: 3.5em;
	img {
		width: 100%;
		height: 100%;
	}
`;

export default ProductSmallSlider;
