import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import QuestionsPage from "./pages/QuestionsPage";
import AgreementPage from "./pages/AgreementPage";


class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/Category" exact component={CategoryPage} />
          <Route path="/Questions" exact component={QuestionsPage} />
          <Route path="/Agreement" exact component={AgreementPage} />
          <Route path="/ProductPage" exact component={ProductPage} />
        </>
      </Router>
    );
  }
}

export default App;