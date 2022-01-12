import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Services from './components/team2/Services/Services'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FrontEndEnums } from './components/utils/enum'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" >

        </Route>
        <Route path="/about" >

        </Route>
        <Route path="/services" >
        <Services></Services>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
