import React, { Component } from "react";
import styled from "styled-components";
import { colors} from "../../Config/Var";


const BuyNow = styled.button`
	    width: 166px;
    height: 50px;
    border: 1px solid #ff7676;
    border-radius: 10px;
    background: #fff;
    font-size: 1.3em;
    color: #040505;
    font-family: Roboto;
    font-weight: 600;
    margin-right: 15px;
		outline: none;
		&:hover {
			background: ${colors.prodbtnhov};
			cursor:pointer;

		}
`
const ToCard = styled.button`
	  width: 166px;
    height: 50px;
    background: rgba(255,118,118,.8);
    border-radius: 10px;
    font-size: 1.3em;
    color: #040505;
    font-family: Roboto;
    font-weight: 600;
		outline: none;
		border:none;
		&:hover {
			background: ${colors.prodbtnhov};
			cursor:pointer;
		}

`


export default class BuyButtons extends Component {
    render() {
			const {buyNow,toCard} = this.props
			if(buyNow) {
						return(
							<BuyNow>Купить сейчас</BuyNow>
						)			
			}
			if(toCard) {
				return(
					<ToCard>В корзину</ToCard>
				)			
	}
    }
}