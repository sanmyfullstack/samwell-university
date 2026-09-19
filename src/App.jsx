import React from 'react'

const App = () => {
  return (
    <div>
{/* <!--nav bar-->  */}
<header>
    <div className="nav-link"><a href="../WEB CLASS/MY APP.html">HOME</a></div>
    <div className="nav-link"><a href="../../Pictures/image1.webp">ABOUT US</a></div>
    <div className="nav-link"><a href="../../Pictures/image 2.jpg">CONTACT US</a></div>
    <div className=" nav-link"><a href="../WEB CLASS/MY APP.css">SERVICES</a></div>
    
</header>
{/* <!--HERO SECTION--> */}
<div className="hero-section">
    <div className="overlay">
        <div className="text">
            <h1>WELCONE TO SAMWELL UNIVERSITY</h1>
            <p>WHERE LEARNING STARTS, DIGITAL LEARNING. learn fullstack development, UI/UX, gaphics...</p>
            <div><button>GET STARTED</button></div>
</div>
    </div>
</div>
     {/* <!--ABOUT SECTION--> */}
    <section className="about">
    <div className="about-text">
        <h3> Meet The Owner</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis soluta at quae molestias nemo. Unde praesentium soluta ipsa itaque quod? Reiciendis, quisquam et eligendi a dicta at quidem cum aliquid.</p>
        <button> Know More</button>

    </div>
    <div className="img">
        <img src="../../Pictures/image 2.jpg" alt="pix"/>

    </div>
    </section>

    {/* <!--TESTIMONY--> */}
    <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2> what our students says</h2>
        <div className="testimonials-container">
            <div className="card">
                <img src="../../Pictures/image1.webp"/>
                <h3> Modester Onyema</h3>
                <p> This academy changed my life, i learnt fullstack and i designed my own website that gives me lots of income. I also got a job with a health sector in the UK that gets me paid in dollars</p>
            </div>
            <div className="card">
                <img src="../../Pictures/image 2.jpg"/>
                <h3> ADIGUN FAITH</h3>
                <p> After i finished learning i got a good paying foriegn job </p>
            </div>
            <div className="card">
                <img src="../../Pictures/gettyimages-1278977922-170667a.webp"/>
                <h3> Michael Chieke</h3>
                <p> Aftern learning web design here i got opportunity to meet with US president</p>
            </div>
        </div>
    </section>


    {/* <!-- CALL TO ACTION --> */}
 <section className="cta">
    <div className="cta-content">
        <h2>Ready To Start Your Learning Journey</h2>
        <p>Join us today and start learning practical digital skill transform your future.</p>
        <a href="#" className="cta-button">Get Started</a>
    </div>
 </section>


    {/* <!-- FOOTER --> */}

    <footer className="footer">
        <div className="footer-container">
            {/* <!-- ABOUT --> */}

            <div className="footer-box">
                <h2>Our Digital Skills academy</h2>

                <p>Empowering students with Practical Digital skills for a better future</p>
            </div>

            {/* <!-- QUICK LINKS --> */}

            <div className="footer-box">
                <h3> Quick Links</h3>
                <a href="#"> HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">COURSES</a>
                <a href=""> CONTACT</a>
                <p>Email: info@example.com</p>

                <p>Phone: +2348100219301</p>
            </div>

            {/* <!--- CONTACT ---> */}
            <div className="footer-box">
                <h3>contact us</h3>
                <p>Email: samwelluniversity@gmail.com</p>
                <>Phone : +234 081 0021 9301</>
                <p>Owerri, Imo State</p>
            </div>

            {/* <!-- COPYRIGHT --> */}

             <div className="copyright">
                <p>&copy;2026 Our Digital Skills Academy. All Eights Reserved</p>
             </div>

        </div>
    </footer>


    </div>
  )
}

export default App
