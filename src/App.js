import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from "react-redux";
import HomePage from "./pages/Main";
import CategoryPage from "./pages/Category";
import AgreementPage from "./pages/Agreement";
import QuestionsPage from "./pages/Questions";
import ProductPage from "./pages/Product";
import BasketPage from "./pages/Basket";
import FavoritesPage from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostList from "./components/layout/PostList";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" exact component={CategoryPage} />
          <Route path="/questions" exact component={QuestionsPage} />
          <Route path="/agreement" exact component={AgreementPage} />        
          <Route path="/product" exact component={ProductPage} />
          <Route path="/Basket" exact component={BasketPage} />
          <Route path="/Favorites" exact component={FavoritesPage} />
          <Route path="/Register"  component={Register} />
          <Route path="/Login"  component={Login} />
          <Route path="/PostList"  component={PostList} />
        </>        
      </Router>
    );
  }
}

export default connect() (App);