import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/main";
import Category from "./pages/Category";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={MainPage} />
          <Route path="/Category" component={Category} />
        </>
      </Router>
    );
  }
}

export default App;