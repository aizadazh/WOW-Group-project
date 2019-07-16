import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Config/Var";
import BB1 from "../../static/images/women.jpg";
import BB2 from "../../static/images/shoes.jpg";
import { Link } from "react-router-dom";
import { Container } from "styled-bootstrap-grid";

const BottomBannerBox = styled.div`
    display: flex;
    justify-content: space-between; 
    position: relative;
    width:70%;
    
`;
const Img= styled.img`
    width: 26em;
    height: auto; 
    margin-right: 2em;   
`;
const BannerImage= styled.div`
    display: flex;
    justify-content: space-between;  
    margin: 2rem 0; 
    &:hover ${Img} {
        opacity: 1.5;
    }
`;

const BannerWomenText= styled.h3`
    color: ${colors.white};
    font-size: 2em;
    font-weight: 500;
    position:absolute;
    left: 2%;
    top:45%;
`;
const BannerMenText= styled.h3`
    color: ${colors.white};
    font-size: 2em;
    font-weight: 500;
    position:absolute;
    left: 58%;
    top:45%;
`;

export default class BottomBanners extends Component {
    render() {
        return (
            <Container>
                <BottomBannerBox> 
                    <BannerImage>               
                        <Link to="/"><Img src={BB1}/></Link>
                        <Link to="/"><Img src={BB2}/></Link>
                    </BannerImage>           
                    <BannerWomenText>Женщинам</BannerWomenText> 
                    <BannerMenText>Мужчинам</BannerMenText>                  
                </BottomBannerBox>
            </Container>
        );
    }
}