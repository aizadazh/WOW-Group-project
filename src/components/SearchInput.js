import React, { Component } from "react";

class Product extends Component {  
    render(){
      return (
        <div>
            <a href="index.html" className="block-icon"><img src="images/11a.png"/></a>
                <form>
                    <div className="box">
                        <div className="search-bar">
                            <input type="text" className="input" placeholder="&nbsp;"/>
                            <span className="label">хочу купить</span>
                            <span className="highlight"></span>
                            <div className="search-btn">
                                <i className="icon-search search-icon"></i>
                            </div>
                        </div>
                    </div>

                </form>       
        </div>              
      )
    }
  }
export default Product