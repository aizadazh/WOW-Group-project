import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";




class Layout extends Component {
  render() {
    return (
      <Fragment>
        <HeaderTop />
        <HeaderBottom />
          {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;