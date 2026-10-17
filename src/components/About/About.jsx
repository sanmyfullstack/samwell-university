import React from 'react'
import Header from"../../components/Header/Header";
import {Link} from 'react-router-dom'
import"./About.css";
import nik from "../../assets/image1.jpg";
const About = () => {
  return (
    <div>
       {/* <!--ABOUT SECTION--> */}
          <section className="aboutus">
          <div className="about-text">
              <h3> ABOUT US</h3>
              <p>
Welcome to Samwell University, a digital learning platform created to empower students and aspiring professionals with practical, industry-relevant skills.
At Samwel University, we believe that learning should go beyond the classroom. We provide quality training in Full-Stack Web Development, UI/UX Design, Graphics Design, and other digital skills to help learners build confidence and prepare for real-world opportunities.
Our goal is to create a supportive learning environment where everyone can learn, create, innovate, and grow.
Learn Today. Build Tomorrow.</p>
              <Link to="/Aboutus">
                              <button>KNOW MORE</button>
                            </Link>
      
          </div>
         <img src={nik} alt=" about"/>    
    
          </section>
    </div>
  )
}

export default About
