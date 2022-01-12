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
        <Services></Services>
        </Route>
        <Route path="/about" element={FrontEndEnums.About} >

        </Route>
        <Route path="/services" element={FrontEndEnums.About} >
        <Services></Services>
        </Route>
        <Route path={FrontEndEnums.Support}>

        </Route>
        <Route path={FrontEndEnums.JoinCommunity} >

        </Route>
      </Switch>
    </Router>
  )
}

export default App;
