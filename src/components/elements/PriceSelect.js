import React, { Component } from "react";
//import styled from "styled-components";



export default class PriceSelect extends Component {
	constructor() {
		super();
		this.state = {
			value: 0, //тут теперь задаем значение из атрибута value
			langs: [
				'Язык HTML',
				'Язык CSS',
				'Язык JavaScript',
				'Язык PHP',
			]
		};
	}

	//Изменяем this.state.value при изменении селекта:
	handleSelectChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		
		//Формируем в цикле набор из тегов <option>:
		const options = this.state.langs.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});

		return (<div>
			<p>Ваш выбор: {this.state.langs[this.state.value]}</p>
			<select
				value={this.state.value}
				onChange={this.handleSelectChange.bind(this)}
			>

				{options}

			</select>
        </div>
        );
	}
}