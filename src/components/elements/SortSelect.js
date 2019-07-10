import React, { Component } from "react";
//import styled from "styled-components";



export default class SortSelect extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Сортировка: по умолчанию'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Ваш любимый вкус: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select
             value={this.state.value} 
             onChange={this.handleChange}
             style = {{ margin: "15px", border: "1px solid #6c757d", fontSize: "1rem", borderRadius: "3px"}}>
                <option value="Сортировка: по умолчанию">Сортировка: по умолчанию</option>
                <option value="Lorem ipsum">Lorem ipsum</option>
                <option value="lLorem ipsum">Lorem ipsum</option>
                <option value="Lorem ipsum">Lorem ipsum</option>
            </select>
          </label>
        </form>
      );
    }
  }