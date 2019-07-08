import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Config/Var";
import AdvertImg from "../../static/images/BannerAd.jpg";
import { BtnAdvert } from "./BtnAdvert";

const ProductTextContSl = styled.div`
    background: transparent; 
    position: absolute; 
    bottom: -10em; 
    width: 100%; 
    border-radius: 5px;
    transition: all 0.4s;
`;
const ProductText = styled.p`
    margin-top: 10px; 
    margin-bottom: 10px; 
    padding-left: 5px; 
    font-family: 'Roboto'; 
    font-size: 1em;
    color: ${colors.dark_3};
    font-weight: 400; 
`;
const CardContainerSl = styled.div`
    position: relative; 
    width: 20em; 
    height: 20em; 
    display: flex; 
    flex-direction: column; 
    border-radius: 5px; 
    background: ${colors.dark_3}; 
    transition: all 0.4s; 
    overflow: hidden;
    margin: 0 0 1em;
    
    &:hover {
        border-radius: 5px; 
        background: ${colors.black};        
        transition: all 0.6s; 
        z-index: 3; 
      }
      &:hover ${ProductTextContSl} {
        bottom: 0; 
        z-index: 1; 
        border-radius: 5px; 
        transition: all 0.6s; 
        overflow: hidden; 
        color: ${colors.white}; 
    }
`;
const AdvertImage = styled.div`
    border-radius: 5px; 
    width: 20em; 
    height: 20em; 
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    transition: all 0.4s;
    &:hover {
        transition: all 0.6s; transform: scale(1.04);
    }
`;
const AdTitle = styled.h2`
    margin: 1em 0;    
    padding-left: 1em; 
    font-family: 'Roboto'; 
    font-size: 1em; 
    font-weight: 400; 
    color: ${colors.dark_3}
`;
const SideBar = styled.div`
   width: 30%;
`;

export default class PrcardinSlider extends Component {
    render() {
        return (
            <SideBar>
                <CardContainerSl>
                    <AdvertImage>
                        <Img src={AdvertImg}/>
                    </AdvertImage>
                    <ProductTextContSl>
                        <AdTitle>Title</AdTitle>
                        <ProductText>Est et modo omittam,
                            elit dolores molestie pro eu, 
                            duis iudicabit ne duo. 
                        </ProductText>
                        <BtnAdvert>more</BtnAdvert>
                    </ProductTextContSl>
                </CardContainerSl>
            </SideBar>
        );
    }
}


