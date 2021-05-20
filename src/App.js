import React from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import GithubState from "./components/context/GithubState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            {/* <Alert alert={this.state.alert} /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};
export default App;
