import '../src/CSS/styles.css';

import React from 'react';

import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import AllBlog from './AllBlog';
import AllPoem from './AllPoem';
import PTemp from './PTemp';
import BTemp from './BTemp';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/AllBlog">
            <AllBlog />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/AllPoem">
            <AllPoem />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/poems/:id">
            <PTemp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/blogpost/:id">
            <BTemp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
