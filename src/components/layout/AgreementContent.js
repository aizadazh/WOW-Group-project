import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { colors } from "../../Config/var";
const MainBox = styled.div`
    background: ${colors.grey_3};
    font-family: Roboto;
`;
const TextBox = styled.div`
    padding: 1px 35px 1px 55px;
    font-family: Roboto;
`;
const UlAgreement = styled.ul`
    padding-left: 17px;
`;
const LiAgreement = styled.li`
    list-style: disc;
`;
const H2Agreement = styled.h2`
    font-family: Roboto; 
    font-size: 1.8rem; 
    font-weight: 600; 
    color: ${colors.black_1};
`;
const H3Agreement = styled.h3`
    font-family: Roboto; 
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1};
    line-height: 24px; 
    margin-top: 15px; 
`;
const H4Agreement = styled.h4`
    font-family: Roboto; 
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1}; 
    line-height: 24px; 
    margin-top: 15px; 
`;
const PAgreement = styled.p`
    font-family: Roboto; 
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1}; 
    line-height: 24px; 
    margin-top: 15px; 
`;
const AAgreement = styled.a`
    font-family: Roboto; 
    font-size: 1.3rem; 
    font-weight: 400; 
    color: ${colors.black_1};
    line-height: 24px; 
    margin-top: 15px; 
    &:hover {
        color: ${colors.srh};   
    }
`;

export default class Agreement extends Component {  
    render(){
      return (
        <Container>
           <MainBox> 
           <Col sm={6} md={4} lg={3} xl={3}>
                <TextBox>
                    <H2Agreement>WOW IP Protection and DMCA Policy</H2Agreement>
                    <H3Agreement>The policy of SIA Joom and its affiliates ("Joom" or "we") is to respect intellectual property of
                        others. Our goal is to ensure that our customers have access to genuine goods and that third party
                        rights are not infringed upon.</H3Agreement>
                    <H4Agreement>We have therefore implemented the present policy that details:</H4Agreement>
                    <UlAgreement>
                        <LiAgreement>
                        <PAgreement>how intellectual property rights holders from any country can combat
                        infringement upon their rights on the website located at https://www.joom.com or/and any other
                        websites owned or operated by Joom or any portions thereof (the "Website"), including our mobile
                        app “Joom” and any resources, features, functionality, or services made available through the
                        Website and/or app ("Service"); and</PAgreement>
                        </LiAgreement>
                        <LiAgreement>
                        <PAgreement>how we abide by the Digital Millennium Copyright Act (as amended)
                        ("DMCA"), in particular, process and respond to written notifications of alleged infringement by
                        copyright owners with respect to the United States of America.</PAgreement>
                        </LiAgreement>
                    </UlAgreement>
                </TextBox>
                <TextBox>
                <H2Agreement>1. IP Protection for Rights Holders (available globally)</H2Agreement>
                <H3Agreement>As a rights holder or its agent / representative you can submit a trademark, copyright, patent, or other intellectual property claim at ipr@joom.com.</H3Agreement>
                <H4Agreement>Your claim must contain the following information for us to be able to act on it:</H4Agreement>
                <UlAgreement>
                    <LiAgreement>
                    <PAgreement>how intellectual property rights holders from any country can combat
                        infringement upon their rights on the website located at https://www.joom.com or/and any other
                        websites owned or operated by Joom or any portions thereof (the "Website"), including our mobile
                        app “Joom” and any resources, features, functionality, or services made available through the
                        Website and/or app ("Service"); and</PAgreement>
                    </LiAgreement>
                    <LiAgreement>
                    <PAgreement>how we abide by the Digital Millennium Copyright Act (as amended)
                        ("DMCA"), in particular, process and respond to written notifications of alleged infringement by
                        copyright owners with respect to the United States of America.</PAgreement>
                    </LiAgreement>
                    <LiAgreement>
                    <PAgreement>how we abide by the Digital Millennium Copyright Act (as amended)
                        ("DMCA"), in particular, process and respond to written notifications of alleged infringement by
                        copyright owners with respect to the United States of America.</PAgreement>
                    </LiAgreement>
                    <LiAgreement>
                    <PAgreement>how we abide by the Digital Millennium Copyright Act (as amended)
                        ("DMCA"), in particular, process and respond to written notifications of alleged infringement by
                        copyright owners with respect to the United States of America.</PAgreement>
                    </LiAgreement>
                </UlAgreement>
                </TextBox>
                <TextBox>
                <H2Agreement>Our Designated Agent</H2Agreement>
                <H3Agreement>The notifications and counter-notifications described above may be sent in accordance with this policy to our attention:</H3Agreement>
                <H4Agreement>Designated Agent, Joom USA Inc</H4Agreement>
                <UlAgreement>
                    <LiAgreement>
                        <PAgreement>Email: <AAgreement href="">ipr@joom.com</AAgreement></PAgreement>
                    </LiAgreement>
                    <LiAgreement>
                    <PAgreement>Phone: <AAgreement href="tel:+996 777 00 44 88">+1 844 535 JOOM (5666)</AAgreement></PAgreement>
                    </LiAgreement>
                </UlAgreement>
                </TextBox>
            </Col>
        </MainBox>
        </Container>
      );
    }
  }