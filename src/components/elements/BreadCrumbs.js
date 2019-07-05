import React, { Component } from "react";
import {Link} from "react-router-dom";



class BreadCrumbs extends Component {  
    render(){
      return (
				<ol>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/product">Product</Link></li>
          <li><Link to = "/">Home</Link></li>
					<li><Link to = "/">Home</Link></li>
						
      </ol>          
      )
    }
  }
export default BreadCrumbs;