import React, { Component } from "react";
import HeaderTop from "../layout/HeaderTop";
import Footer from "../layout/Footer";

class MainLayout extends Component{
  render(){
    return (
      <>
        <HeaderTop />
          {this.props.children}     
        <Footer />
      </>
    );
  }
}

export default MainLayout;