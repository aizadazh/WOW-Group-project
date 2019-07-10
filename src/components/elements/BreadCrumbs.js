import React, { Component } from "react";
import {Col} from "styled-bootstrap-grid";



class BreadCrumbs extends Component {  
    render(){
      return(
        <Col xl = {12} lg = {12} sm = {12} md = {12}>
          <div style = {{margin: "10px  0"}}>Breadcrumbs will be here</div>
        </Col>
      )
// 				<Breadcrumb>
// 					<Breadcrumb.Item><Link to = "/">Home</Link></Breadcrumb.Item>
// 					<Breadcrumb.Item><Link to = "/product">Product</Link></Breadcrumb.Item>
// 					<Breadcrumb.Item><Link to = "/">Clothes</Link></Breadcrumb.Item>					
//       </Breadcrumb>   
               
      
    }
  }
export default BreadCrumbs;
