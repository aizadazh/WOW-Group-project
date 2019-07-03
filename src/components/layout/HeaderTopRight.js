import React, { Component } from "react";
import {Link} from "react-router-dom";
import {HeaderTopRightBlock, TopRightLink } from "../../Config/HeaderTopRightStyle";


class HeaderTopRight extends Component {  
    render(){
      return (
        <HeaderTopRightBlock>
          <TopRightLink><Link to = "/" >Избранное</Link></TopRightLink>
          <TopRightLink><Link to = "/" >Войти</Link></TopRightLink>
          <TopRightLink><Link to = "/" >Моя корзина</Link></TopRightLink>  
        </HeaderTopRightBlock>              
      )
    }
  }
export default HeaderTopRight