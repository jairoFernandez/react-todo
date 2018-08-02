import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
//import { UserList } from './components/user/UserList';

//import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { UserPage } from './pages/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/:id' component={UserPage} /> 
          <Route component={NotFound} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
