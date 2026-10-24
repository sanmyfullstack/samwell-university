import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Aboutus from "./pages/Aboutus";
import Services from"./pages/Services";
import ContactUs from"./pages/ContactUs";
import SharpLoginDesign from './pages/Login';
import SharpRegisterDesign from './pages/Register';
import UserDetails from './pages/UserDetails';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<SharpLoginDesign />} />
        <Route path= "/Register" element={<SharpRegisterDesign />} />
        <Route path="/users/:id" element={<UserDetails />} />
       </Routes>
        </div>
  )
}

export default App
