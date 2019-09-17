import React, { Component } from "react";
import styled from "styled-components";
import { colors} from "../../Config/Var";

 const BtnSelect = styled.button`
    margin: 20px 25px;
    width: 90px;
    height: 30px;
    background: ${colors.prodbtn};
    display: flex;
    color: ${colors.white};
    font-family: Roboto;
    font-size: 1rem;
    border: 0px;
    border-radius: 3px;
    displey: flex;
    justify-content: center;
    &:hover {
        background: ${colors.prodbtnhov};
    }
`;
export default class ButtonSelect extends Component{
    constructor() {
        super();
       
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("!!!!!!!!!!!!!!!!!!!!");
        console.log(this.props);
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://wow.kg/crm/api/?action=list&object=api_products"; 
        fetch(proxyurl + url)
          .then(response => response.json())
          .then(json => { 
            json.sort(function(a, b){
                return a.price-b.price
              })
              this.setState({
                  isLoaded: true,
                  items: json.api_products
              })
          })
          .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
      }
      
    render() {
        return (
            <BtnSelect  
            type="button"
            value="Submit"
            onClick={this.handleSubmit}
            >Применить
            </BtnSelect>
        );
    }

}

