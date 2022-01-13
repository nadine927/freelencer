import React from 'react';
import './App.css';
import Services from './components/team2/Services/Services'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FrontEndEnums } from './components/utils/enum'
import About from './components/team2/About/About'
// import Default from './components/Default/Default'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" >
        <Services></Services>
        </Route>
        <Route path="/about" element={FrontEndEnums.About} >
        <About></About>
        </Route>
        <Route path="/services" element={FrontEndEnums.Service} >
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
