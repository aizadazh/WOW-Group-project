import React, { Component } from "react";
import {Link} from "react-router-dom";
import {HeaderTopRightBlock, TopRightLinks, TopRightLink1 } from "../../Config/HeaderTopRightStyle";
import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
import { Dropdown, DropdownButton } from "react-bootstrap";

class HeaderTopRight extends Component {  
    render(){
      return (
        <HeaderTopRightBlock>
          <TopRightLinks>
            <TopRightLink1><Link to = "/Favorites" ><FiHeart/> Избранное</Link></TopRightLink1>
            <TopRightLink1><Link to = "/Form" ><FiUser/> Войти</Link></TopRightLink1>
            <TopRightLink1><Link to = "/Basket" >< FiShoppingCart/> Моя корзина</Link></TopRightLink1>
            
            
          </TopRightLinks>
          <DropdownButton id="dropdown-basic-button" title="$">
              <Dropdown.Item href="#/action-1">RUB</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SOM</Dropdown.Item>
              <Dropdown.Item href="#/action-3">$</Dropdown.Item>
          </DropdownButton>
        </HeaderTopRightBlock>              
      )
    }
  }
export default HeaderTopRight