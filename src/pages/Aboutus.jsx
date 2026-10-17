import React from 'react'
import Header from "../pages/Landingpage";
import image from "../assets/image 2.jpg";
const About = () => {
  return (
    <div>
       {/* <!--ABOUT SECTION--> */}
          <section className="about">
          <div className="about-text">
              <h3> ABOUT US</h3>
              <p>
Welcome to Samwel University, a digital learning platform created to empower students and aspiring professionals with practical, industry-relevant skills.
At Samwel University, we believe that learning should go beyond the classroom. We provide quality training in Full-Stack Web Development, UI/UX Design, Graphics Design, and other digital skills to help learners build confidence and prepare for real-world opportunities.
Our goal is to create a supportive learning environment where everyone can learn, create, innovate, and grow.
Learn Today. Build Tomorrow.
Short version for your homepage
Samwel University is a digital learning platform dedicated to equipping students with practical technology and creative skills. From full-stack development to UI/UX and graphics design, we help learners turn knowledge into real-world solutions and career opportunities. </p>
              <button> Know More</button>
              

          </div>
        <div className="img">
        <img src={image} alt="pix"/>

         </div>
          </section>
    </div>
  )
}

export default About
