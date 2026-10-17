import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Services from"./pages/Services";
import ContactUs from"./pages/ContactUs";
import SharpLoginDesign from './pages/Login';
import SharpRegisterDesign from './pages/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Login"  element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<SharpLoginDesign />} />
        <Route path= "/Register" element={<SharpRegisterDesign />} />
       </Routes>
        </div>
  )
}

export default App
