import React, { Component } from 'react';
import styled from 'styled-components';
import { Col} from "styled-bootstrap-grid";
import ProductSize from "./ProductSize";
import ProductSlider from "./ProductSlider";


const ProductInfoBox =  styled.div`
	background:#fff;
	padding:1em 0.8em;
	z-index:-2;
`;

const Price =  styled.span`
	color:#f17375;
	font-size:2em;
`;
const SizeBox =  styled.div`
	display: flex;
	justify-content:space-around;
	margin-top: 15px;
	margin-bottom: 15px;
	width:80%;
`;
const RecomendBoxes = styled.div`
	backgound: #fff;
	margin:  1em 0;
`

class ProductInfo extends Component {
	
	render() {
		const currentProduct= {
			name: "Название товара",
			price: "50$",
			amount: 1,
			color: "Как на картинке",
			size: "S",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}
		return (
			<Col lg ={6} md = {12} sm = {12} xl = {6}>
				<ProductInfoBox>
					<h3>{currentProduct.name}</h3>
					<h4>Цена:  <Price>{currentProduct.price}</Price></h4>
					<h4>Количество:  {currentProduct.amount}</h4>
					<h4>Цвет:  {currentProduct.color}</h4>
					
					<h4>Размеры:</h4>
						<SizeBox>
							<ProductSize size = "S"/>
							<ProductSize size = "M"/>
							<ProductSize size = "L"/>
							<ProductSize size = "Xl"/>
							<ProductSize size = "XXL"/>
							<ProductSize size = "XXXL"/>
						</SizeBox>
					<h4>Описание:</h4>
					<div>{currentProduct.description}</div>
				
				</ProductInfoBox>
				<RecomendBoxes>
					<ProductSlider sliderTitle = "Наши предложения" showCount = "3" />
				</RecomendBoxes>
				<RecomendBoxes>
					<ProductSlider sliderTitle = "Похожие товары" showCount = "3" />
				</RecomendBoxes>
				
			</Col>
		);
	}
}



export default ProductInfo;