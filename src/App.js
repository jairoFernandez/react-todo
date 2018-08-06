import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import UserPage from "./pages/UserPage";

class App extends Component {
  render() {
    return (
      <div className="App">      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={UserPage} />
          <Route component={NotFound} />
        </Switch>
        <footer>
          <a href="https://github.com/jairoFernandez/react-todo" target="_blank">Enlace al repositorio</a>
        </footer>
      </div>
    );
  }
}

export default App;
