import React, { Component } from 'react';
import styled from 'styled-components';






const Size =  styled.div`
	background: #eee;
	border: 1px solid #85989c;
	border-radius: 5px;
	padding: 5px;
	&:hover{
		background: #FF7676;
	}
`;

class ProductSize extends Component {
	
	render() {
	const {size} =  this.props;
		return (
			<Size>{size}</Size>
		);
	}
}



export default ProductSize;