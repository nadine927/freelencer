import React from 'react';
import Home from './components/team1/Home';
import './App.css';
import Services from './components/team2/Services/Services'
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
// import { FrontEndEnums } from './components/utils/enum'
import About from './components/team2/About/About'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/support" element={<About/>} />
        <Route path="/findjob" element={<About/>} />
        <Route path="/joincommunity" element={<About/>} />
    </Routes>
    </BrowserRouter>


  )
}

export default App;
