import React, { Component } from 'react';
import styled from 'styled-components';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';




const RatingsBox =  styled.div`
	width:100%;
	background:#fff;
	padding:1em 0.5em;
	margin: 1em auto;
`


class Ratings extends Component {


	render() {
		
		return (
				<RatingsBox>
					<h2>Отзывы</h2>
					<div style= {{margin: "0 auto",width:"12em"}}>
						<Rater total={5} style= {{fontSize: "2em"}} />
					</div>
					<hr/>
				</RatingsBox>
		);
	}
}



export default Ratings;
