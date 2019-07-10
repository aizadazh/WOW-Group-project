import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import styled from 'styled-components';
import { colors} from "../../Config/Var";




class Layout extends Component {
  render() {
    return (
      <Fragment>
        <HeaderTop />
        <HeaderBottom />
          <Container fluid style = {{overflow: "hidden"}}>{this.props.children}</Container>
        <Footer />
      </Fragment>
    );
  }
}
const Content = styled.div` 
  height: auto;
  margin: 0 auto;
  background: ${colors.grey_1};
`;

export default Layout;