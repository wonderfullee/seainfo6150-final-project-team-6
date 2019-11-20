import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import UserLogin from "./User/UserLogin.jsx";
import UserRegister from "./User/UserRegister.jsx";
import RestaurantCategory from "./Restaurant/RestaurantCategory.jsx";
import RestaurantDetail from "./Restaurant/RestaurantDetail.jsx";
import data from "./data/data.json";
import Error from "./Error/Error.jsx";

const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={UserLogin} />
        <Route path="/register" exact component={UserRegister} />
        <Route
          path="/restaurants/:category"
          exact
          render={({ match }) => (
            <RestaurantCategory
              data = {data}
              category = {match.params.category}/>
          )}
        />
        <Route
          path="/restaurants/:category/:index"
          exact
          render={({ match }) => (
            <RestaurantDetail
              data = {data}
              category = {match.params.category}
              index = {match.params.category}/>
          )}
        />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;