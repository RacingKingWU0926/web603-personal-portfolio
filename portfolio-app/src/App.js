import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import About from './components/About';
import SayHi from './components/SayHi';
import Portfolio from './components/Portfolio';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/about/" component={About} />
          <Route path="/say-hi/" component={SayHi} />
          <Route path="/#portfolio" component={Portfolio} />
          <Route exact path="/" component={About} />
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
