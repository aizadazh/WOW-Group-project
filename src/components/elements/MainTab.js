import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { colors, font_size} from "../../Config/var";
import { Title} from "../../Config/Title";
import ProdImg from "../../static/images/product.jpg";


const TabContainer1 = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background: ${colors.grey_1};
    transition: all .4s;
    width: 180px;
    height: 40px;
    margin-bottom: 10px;
`;

export default class MainTab extends Component {
    render() {
        return (
            <Col sm={6} md={4} lg={3} xl={3}>
                <TabCont>
                
                
                   
                </TabCont>
            </Col>
        );
    }
}

