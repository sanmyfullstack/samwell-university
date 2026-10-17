import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Aboutus from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/footer/Footer'
import Cta from '../components/CTA/Cta'

const Landingpage = () => {
  return (
    <div>
      <Header/>
              <Hero/>
              <Aboutus/>
              <Testimonials/>
              <Cta/>
               <Footer/>
    </div>
  )
}

export default Landingpage
