import React, { Component } from "react";
import styled from "styled-components";

import logo from "../../static/images/11a.png";

const LogoLink = styled.a`
    width: 130px;
    display: flex;
    align-items: center;

`
const LogoImg = styled.img`
width:100%;
height:100%;
`
const SearchBox = styled.div`

    margin-left: 18px;
    height: 34px;
    width: 300px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    position: relative;
    background: #fff;


`
const Input = styled.input`
      border: none;
      height: 25px;
      width: 74%;
      color: #1b1b1b;
      font-size: 1.5rem;
      outline: none;
      position: absolute;
      bottom: 1px;
     
`
const Label = styled.span`
    color: #aaaaaa;
    position: absolute;
    top: 9px;
    pointer-events: none;
    transition: all 0.5s ease;
`
const HighLight = styled.span`
    width: 0px;
    height: 1px;
    background: #4279a3;
    position: absolute;
    bottom: 4px;
    transition: all 1s ease;
`

const SearchButton = styled.div`
    background: #ff7676;
    border-radius: 20px;
    height: 34px;
    min-width: 53px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    justify-content: center;
    cursor: pointer;
    right: 2px;
    position: absolute;
    transition: all 1s ease;
`

const SearchIcon = styled.i`
    font-size: 2.0rem;
    color: #ffffff;
`

// .button-div {
//     display: flex;
//     align-items: center;
//     height: 100%;
  
//   }
  
  
//   .box {
//     body {
//       background: #aaaaaa;
//       font-family: helvetica;
//       margin: 50px;
//     }
  
//     .search-bar {
//       margin-left: 18px;
//       height: 34px;
//       width: 300px;
//       border-radius: 40px;
//       display: flex;
//       align-items: center;
//       padding: 0 0 0 20px;
//       position: relative;
//       background: #fff;
//     }
  
    // .input {
    //   border: none;
    //   height: 25px;
    //   width: 74%;
    //   color: #1b1b1b;
    //   font-size: 1.5rem;
    //   outline: none;
    //   position: absolute;
    //   bottom: 1px;
    // }
  
//     .input:not(:placeholder-shown) + .label {
//       font-size: 0.9rem;
//       top: 3px;
//       color: #6c757d;
//     }
  
//     .input:focus ~ .label {
//       font-size: 0.9rem;
//       top: 3px;
//       color: #4279a3;
//       transition: all 0.5s ease;
//     }
  
//     .label {
    //   color: #aaaaaa;
    //   position: absolute;
    //   top: 9px;
    //   pointer-events: none;
    //   transition: all 0.5s ease;
//     }
  


  
//     .input:focus ~ .highlight {
//       width:80%;
//       transition: all 1s ease;
//     }
  
//   }








class Product extends Component {  
    render(){
      return (
        <div>
            <LogoLink href="index.html" className="block-icon"><LogoImg  alt = "logo" src={logo}/></LogoLink>
                <form>
                    <div>
                        <SearchBox>
                            <Input type="text"  placeholder="&nbsp;"/>
                            <Label>хочу купить</Label>
                            <HighLight/>
                            <SearchButton>
                                <SearchIcon className="icon-search "></SearchIcon>
                            </SearchButton>
                        </SearchBox>
                    </div>
                </form>       
        </div>              
      )
    }
  }
export default Product