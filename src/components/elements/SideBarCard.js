import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Config/Var";
import AdvertImg from "../../static/images/BannerAd.jpg";
import { Link } from "react-router-dom";

const BannerText = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 20px;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Roboto';
    color: ${colors.white};
    transition: all 0.6s;
`;
const ProductText = styled.p`
    font-size: 0.9rem;
    font-weight: 400;    
    line-height: 150%;
    font-style: italic;
    color: ${colors.banner_text};
`;
const Banners = styled.div`    
    display: flex;
    width: 100%;
    height: 245px;
    overflow: hidden;
    position: relative;
   }
`;
const AdvertImage = styled.div`   
    width: 100%;
    height: 245px;
    transition: all 0.5s;
`;
const Img = styled.img`
    width: 100%;
    height: 245px;
    transition: all 0.5s;
    transition: all 0.4s;
    &:hover {
        transition: all 0.6s; transform: scale(1.04);
    }
`;
const AdTitle = styled.h2`      
    font-family: 'Roboto'; 
    font-size: 1rem;
    font-weight: 400; 
    color: ${colors.white}
`;
const SideBar = styled.div`
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 22%;
    float: right;
`;
const BannerButton = styled(Link)`
    width: 50px;
    height: 18px;
    background: ${colors.srh};
    border-radius: 2px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    &:hover ${Img} {
        transform: scale(1.06);
        transition: all 0.5s;
        filter: brightness(75%)
        }
    &:hover ${BannerText}{       
        bottom: 0px;
        transition: all 0.6s;
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


