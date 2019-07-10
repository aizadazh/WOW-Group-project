import React, { Component } from 'react';
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import b1 from '../../static/images/banner1.jpg';




const SliderWrapper = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999999;
  justify-content: space-around;

	

`;
const CarouselItems = styled.div`
	border:1px solid green;
	border-radius: 5px;
	overflow: hidden;

`;

const Preview = styled.div`
	width:500px;
	height:500px;
	backgound:#333;

`;



const options	 = {
	margin:10,
	autoplay: true,
	center:true,
	responsive:{
		0:{
				items:2,
				margin:5
		},
		600:{
				items:3,
				margin:10
		},
		1000:{
				items:3,
				margin:15

		}
}
}

class ProductSmallSlider extends Component {


	render() {
	
		return (
			<>
			
				<SliderWrapper>
					<OwlCarousel
							className="owl-theme"
							loop
							nav
							{...options}
					>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"></img></CarouselItems>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"></img></CarouselItems>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"></img></CarouselItems>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"></img></CarouselItems>
						
					</OwlCarousel>
					{/* <Preview></Preview> */}x
				</SliderWrapper>
		
		
			</>
		);
	}
}



export default ProductSmallSlider;
