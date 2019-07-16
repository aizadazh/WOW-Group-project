import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import CategoryPage from "./pages/Category";
// import AgreementPage from "./pages/Agreement";
import QuestionsPage from "./pages/Questions";
import ProductPage from "./pages/Product";
import BasketPage from "./pages/Basket";
import FormPage from "./pages/Form";
import FavoritesPage from "./pages/Favorites";


class App extends React.Component {
  render() {
    return (
      <Router>
      <>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" exact component={CategoryPage} />
          <Route path="/questions" exact component={QuestionsPage} />
          {/* <Route path="/agreement" exact component={AgreementPage} />         */}
          <Route path="/product" exact component={ProductPage} />
          <Route path="/basket" exact component={BasketPage} />
          <Route path="/form" exact component={FormPage} />
          <Route path="/favorites" exact component={FavoritesPage} />
        </>        
      </Router>
    );
  }
}

export default App;