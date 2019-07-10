import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";


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
<<<<<<< HEAD
=======
const Content = styled.div` 
  height: auto;
  margin: 0 auto;
  background: ${colors.grey_1};
`;
>>>>>>> master

export default Layout;