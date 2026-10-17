
import React from 'react';
import image from "../assets/images 4.jpg";
import ken from "../assets/images 3.jpg";
import dan from "../assets/UI-VS-UX-banner.webp";
import lib from "../assets/library 2.jpg";
import research from "../assets/research.webp";
import guide from "../assets/carer.jpeg";
import sup from "../assets/student.jpg";
const Services = () => {
  return (
    <div>
    <div className="services-container">
      {/* Services Section */}
      <h2>Our Services</h2>

      <p className="services-intro">
        At Samwell University, we are committed to providing
        quality education, practical skills, and opportunities
        that prepare students for a successful future.
      </p>

      {/* Services Image */}
      <div className="services-image" />
        <img src={image} alt="Samwell University services" />
      </div>

     //   {/* Services Grid */}
      <div className="services-grid"/>
        <div className="service-card">
          <div className="service-icon">🎓</div>
          <h3>Quality Education</h3>
          <p>
            We provide quality academic programmes designed
            to equip students with knowledge and skills.
          </p>
          <img src={dan} alt="pix" />
        </div>

        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Digital Learning</h3>
          <p>
            We encourage technology-driven learning to prepare
            students for the digital world.
          </p>
          <img src={ken} alt="pics" />
        </div>

        <div className="service-card">
          <div className="service-icon">📚</div>
          <h3>Library Services</h3>
          <p>
            Students have access to learning resources that
            support research, reading, and academic excellence.
          </p>
          <img src={lib} alt="pics" />
        </div>

        <div className="service-card">
          <div className="service-icon">🔬</div>
          <h3>Research and Innovation</h3>
          <p>
            We promote creativity, research, and innovative
            thinking to solve real-world problems.
          </p>
          <img src={research} alt="pics" />
        </div>

        <div className="service-card">
          <div className="service-icon">🤝</div>
          <h3>Career Guidance</h3>
          <p>
            We help students discover career opportunities
            and develop skills for their professional journeys.
          </p>
          <img src={guide} alt="pics" />
        </div>

        <div className="service-card">
          <div className="service-icon">🏠</div>
          <h3>Student Support</h3>
          <p>
            We encourage a supportive learning environment
            that promotes student growth and well-being.
          </p>
          <img src={sup} alt="pics" />
        </div>
    </div>
    
  );
};

export default Services;
