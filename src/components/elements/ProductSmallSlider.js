import React, { Component } from 'react';
import styled from 'styled-components';
import {Col} from "styled-bootstrap-grid";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactImageZoom from 'react-image-zoom';
import Ratings from "./Ratings"

import b1 from '../../static/images/banner1.jpg';


const SliderWrapper = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
	margin:0 auto;
  justify-content: space-around;	

`;
const CarouselItems = styled.div`
	border-radius: 5px;
	width: 114px;
	overflow: hidden;   
`;

const Preview = styled.div`
	width:21em;
	height:21em;
	backgound:#333;
	margin:0 auto;
	padding: 0 auto; 
	${ReactImageZoom} {
	
		border:5px solid green;
	}

`;



const options	 = {
	margin:10,
	autoplay: true,
	center:true,
	responsive:{
		0:{
				items:3,
				
		},
		600:{
				items:4,
			
		},
		1000:{
				items:3,
				

		}
}
}

class ProductSmallSlider extends Component {


	render() {
		const previewImageProps = {width: 400, height: 400, zoomWidth: 400, img: b1}
		return (
			<Col xl= {5} lg= {5} md ={12} sm = {12}>
				<SliderWrapper>
					<OwlCarousel
							className="owl-theme"
							loop
							nav
							{...options}
					>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"/></CarouselItems>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"/></CarouselItems>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"/></CarouselItems>
							<CarouselItems className="item"><img src = {b1} alt = "productKinds"/></CarouselItems>

					</OwlCarousel>
					<Preview>
						<ReactImageZoom 
						{...previewImageProps}
						/>
					</Preview>
				
				</SliderWrapper>	
				<Ratings/>
		
			</Col>
		);
	}
}



export default ProductSmallSlider;
