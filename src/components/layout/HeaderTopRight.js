import React, { Component } from "react";
import {Link} from "react-router-dom";
import {HeaderTopRightBlock, TopRightLinks, TopRightLink1 } from "../../Config/HeaderTopRightStyle";
import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
//import { Dropdown, DropdownButton } from "styled-bootstrap-grid";

class HeaderTopRight extends Component {  
    render(){
      return (
        <HeaderTopRightBlock>
          <TopRightLinks>
            <TopRightLink1><Link to = "Favorites" ><FiHeart/> Избранное</Link></TopRightLink1>
            <TopRightLink1><Link to = "/Form" ><FiUser/> Войти</Link></TopRightLink1>
            <TopRightLink1><Link to = "/Basket" >< FiShoppingCart/> Моя корзина</Link></TopRightLink1>
          </TopRightLinks>
         
         
        </HeaderTopRightBlock>              
      )
    }
  }
export default HeaderTopRight