// import React, { Component } from "react";
// import SecondSelectBlock from "./SecondSelectBlock"
// import styled from "styled-components";
// import { colors} from "../../Config/Var";
// //import { Link } from "react-router-dom";
// //import {BtnSelect} from "./BtnSelect"
// //import ProductCardBox from "./ProductCardsBox";

// const BtnSelect = styled.button`
//     margin: 20px 25px;
//     width: 90px;
//     height: 30px;
//     background: ${colors.prodbtn};
//     display: flex;
//     color: ${colors.white};
//     font-family: Roboto;
//     font-size: 1rem;
//     border: 0px;
//     border-radius: 3px;
//     displey: flex;
//     justify-content: center;
//     &:hover {
//         background: ${colors.prodbtnhov};
//     }
// `;

// export default class AllSelect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // someState: 0,
//             // someMoreState: 1,
//             // evenMoreState: 2
//           };
//         this.handlePriceChange = this.handlePriceChange.bind(this);
//         //this.handlePriceCheckboxChange = this.handleCheckboxChange.bind(this);
//         console.log("!!!!!!!!!!!!!!!!!!!!");
//         console.log(this.props);
//     }
//     handlePriceChange = e => {
//         const { name, value } = e.target
//         this.setState({ 
//             [name]: value 
//         })
//     }
//     handleSubmit = event => {
//         event.preventDefault();
        
//         const proxyurl = "https://cors-anywhere.herokuapp.com/";
//         const url = "http://wow.kg/crm/api/?action=list&object=api_products"; 
//         fetch(proxyurl + url)
//           .then(response => response.json())
//           .then(json => { 
//             json.sort(function(a, b){
//                 return a.price-b.price
//               })
//               this.setState({
//                   isLoaded: true,
//                   items: json.api_products
//               })
//           })
//           .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
//       }
          
//     render() {
//         return (
//             <>
//                <SecondSelectBlock value={this.handlePriceChange}/>
//                <BtnSelect  
//                     type="button"
//                     value="Submit"
//                     onClick={this.handleSubmit}
//                     >Применить
//                 </BtnSelect>
//             </>
//         );

//     }
// }  