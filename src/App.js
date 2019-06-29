import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";


class App extends React.Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" exact component={CategoryPage} />
          <Route path="/product" exact component={ProductPage} />
        
      </Router>
    );
  }
}

export default App;