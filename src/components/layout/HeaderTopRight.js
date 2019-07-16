import React, { Component } from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { colors } from '../../Config/Var';
//import {HeaderTopRightBlock, TopRightLinks, TopRightLink1 } from "../../Config/HeaderTopRightStyle";
import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";

const HeaderTopRightBlock = styled.div`
	padding-bottom: 0;
	padding-top: 0;
	width: 100%;
	display: flex;
	background: #f0f0f0;
	font-weight: bold;
	textDecoration: none;
	color: ${colors.black_1};

div.TopRightLinks{
  width: 100%;
  position: relative;
	margin-right: 20px;
  padding-right: 15px;
  padding-left: 15px;
	display: flex;
	align-content: space-between;
	justify-content: flex-end; 
  textDecoration: none;
  color: #040505;

  left: 30%;
}
	div.TopRightLink1{
		margin-left: 10px; 
    padding: 0;
    width: 105px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    float: right;
    textDecoration: none;
    font: inherit;
    color: ${colors.black_1};
    &:hover {
          color: ${colors.srh};   
    }
  };
  div.TopRightLink2{
		margin-left: 10px; 
    padding: 0;
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    float: right;
    textDecoration: none;
    font: inherit;
    vertical-align: baseline;
    color: ${colors.black_1};
    &:hover {
          color: ${colors.srh};   
    }
  };
  `;

// const UlRate = styled.ul`
//     display: flex;
//     list-style-type: none;
//     width: 100%;
//     justify-content: left;
//     flex-direction: column;    
//     align-items: flex-start;
       
// `;
// const LiRate = styled.li`
// 	margin-top: 15px;
// 	padding: 0;
//     a {
//     color: ${colors.a};
//     }
//     &:hover{
//         color: ${colors.sub};
//     } 
    
// `;

class HeaderTopRight extends Component {
    render(){
      return (
        <div className="container">
          {/* <div class="row">
            <div class="col-12 col-lg-5 col-md-5 col-sm-5 col-xl-5">
                <HeaderTopRightBlock>
                <div className="TopRightLinks">
                    <div className="TopRightLink2"><FiHeart/></div>
                    <div className="TopRightLink1"><Link to = "Favorites" > Избранное</Link></div>
                    <div className="TopRightLink2"><FiUser/></div>
                    <div className="TopRightLink1"><Link to = "/Login" > Войти</Link></div>
                    <div className="TopRightLink2">< FiShoppingCart/></div>
                    <div className="TopRightLink1"><Link to = "/Basket" > Моя корзина</Link></div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1"></label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>RUB</option>
                        <option>SOM</option>
                        <option>$</option>
                      </select>
                    </div>  
                  </div> 
                  <div class="TopRightLinks">
                    
                  </div>    
                </HeaderTopRightBlock>
              </div>
        </div> */}
      </div>            
      )
    }
  }
export default HeaderTopRight