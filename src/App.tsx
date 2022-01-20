import React from 'react';
import Home from './components/pages/Home';
import './App.css';
import Support from './components/pages/support';
import Services from './components/pages/Services'
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
// import { FrontEndEnums } from './components/utils/enum'
import About from './components/pages/About'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/findjob" element={<About/>} />
        <Route path="/joincommunity" element={<About/>} />
    </Routes>
    </BrowserRouter>



  )
}

export default App;
