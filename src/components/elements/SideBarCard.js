import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Config/Var";
import AdvertImg from "../../static/images/BannerAd.jpg";
import { Link } from "react-router-dom";

const BannerText = styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: -6.9em;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Roboto';
    color: ${colors.white};
    transition: all 0.6s;    
`;
const ProductText = styled.p`
    font-size: 0.8rem;
    font-weight: 400;    
    line-height: 150%;
    font-style: italic;
    color: ${colors.banner_text};    
`;
const Banners = styled.div`    
    display: flex;
    width: 100%;
    height: 15em;
    overflow: hidden;
    position: relative;
`;
const AdvertImage = styled.div`   
    width: 100%;
    height: 15em;
    transition: all 0.5s;   
`;
const Img = styled.img`
    width: 100%;
    height: 15em;
    transition: all 0.5s;
    transition: all 0.4s;
    &:hover {
        transition: all 0.6s; transform: scale(1.04);
    }
    &:hover{
        transform: scale(1.06);
        transition: all 0.5s;
        filter: brightness(75%)
        }   
`;
const AdTitle = styled.h2`      
    font-family: 'Roboto'; 
    font-size: 1rem;
    font-weight: 400; 
    color: ${colors.white}
    margin-bottom: -0.5rem; 
    margin-top: -0.2rem;  
`;
const SideBar = styled.div`
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 22%;
    float: right;
    &:hover ${BannerText} {              
        bottom: 0em;
        transition: all 0.6s;
    } 
`;
const BannerButton = styled(Link)`
    width: 3em;
    height: 0.8em;
    background: ${colors.srh};
    border-radius: 2px;
    font-size: 1.2rem;
    padding: 0.2em 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    text-decoration: none;
    a {
        color: ${colors.white};
        font-size: 0.8em;
        text-decoration: none;    
    }   
`;

export default class SidebarCard extends Component {
    render() {
        return (           
            <SideBar>
               <Banners>
                   <AdvertImage>
                       <Img src={AdvertImg}/>
                   </AdvertImage>
                   <BannerText>
                       <AdTitle>Title</AdTitle>
                       <ProductText>Est et modo omittam,
                           elit dolores molestie pro eu, 
                           duis iudicabit ne duo. 
                       </ProductText>
                       <BannerButton><Link to="/">more</Link></BannerButton>
                   </BannerText>
               </Banners>
           </SideBar>
           
            
        );
    }
}


