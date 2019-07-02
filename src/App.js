import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Main";
import CategoryPage from "./pages/Category";
<<<<<<< HEAD
import AgreementPage from "./pages/Agreement";
import QuestionsPage from "./pages/Questions";

=======
import ProductPage from "./pages/Product";
>>>>>>> 14a0ad81f5bf2799f3d75ab7c05f602584e13117


class App extends React.Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={HomePage} />
<<<<<<< HEAD
          <Route path="/Category" exact component={CategoryPage} />
          <Route path="/Questions" exact component={QuestionsPage} />
          <Route path="/Agreement" exact component={AgreementPage} />
        </>
=======
          <Route path="/category" exact component={CategoryPage} />
          <Route path="/product" exact component={ProductPage} />
        
>>>>>>> 14a0ad81f5bf2799f3d75ab7c05f602584e13117
      </Router>
    );
  }
}

export default App;