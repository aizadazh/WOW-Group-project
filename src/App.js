import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import CategoryPage from "./pages/Category";
import AgreementPage from "./pages/Agreement";
import QuestionsPage from "./pages/Questions";
import ProductPage from "./pages/Product";
import BasketPage from "./pages/Basket";
import FormPage from "./pages/Form";
import FavoritesPage from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
      <>
          <Route path="/" exact component={HomePage} />
          <Route path="/Category" exact component={CategoryPage} />
          <Route path="/Questions" exact component={QuestionsPage} />
          <Route path="/Agreement" exact component={AgreementPage} />        
          <Route path="/product" exact component={ProductPage} />
          <Route path="/Basket" exact component={BasketPage} />
          <Route path="/Form" exact component={FormPage} />
          <Route path="/Favorites" exact component={FavoritesPage} />
          <Route path="/Register"  component={Register} />
          <Route path="/Login"  component={Login} />
        </>        
      </Router>
    );
  }
}

export default App;