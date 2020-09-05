import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from "./pages/Home.js";
import Gallery from "./pages/Gallery.js";

function App() {
  return (
    // Router set-up
    <Router>
      <Switch>
        {/* Route to Home page */}
        <Route to exact path="/">
          <Home />
        </Route>
        {/* Route to Gallery page */}
        <Route to exact path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
