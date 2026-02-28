import React from "react";
import Slider from "react-slick";
import "./Home.css";  // 👈 CSS yaha import
import { Link } from "react-router-dom";
import FlipCards from "./FlipCards";
import "./FlipCards.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <>
    <div className="slider-section">
      <Slider {...settings}> {/* this is spread operator which is used for apply top property */}

        {/* Slide 1 */}
        <div>
          <div className="slide-wrapper">
            <div className="slide-left">
              <h3 className="subtitle">CoolMaster AC Services</h3>
              <h1 className="title">AC Gas Refill</h1>
              <p className="text">
                Get perfect cooling with our fast and accurate AC gas refill service. We use high-quality refrigerant to fix low cooling, gas leaks, and performance issues for split, window, and cassette ACs. Enjoy efficient, powerful cooling with our quick and reliable service.
              </p>
              <button className="btn">BOOK NOW →</button>
            </div>

            <div className="slide-right">
              <img src="/AC-Gas-Refill-.jpeg" alt="AC Service" className="slide-img" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="slide-wrapper">
            <div className="slide-left">
              <h3 className="subtitle">CoolMaster AC Services</h3>
              <h1 className="title">AC Repair</h1>
              <p className="text">
               Delivers quick, professional AC repair for homes and offices. From cooling problems and gas leaks to noise and electrical faults, our technicians handle all issues with precision. We service split, window, and cassette ACs with fast turnaround and lasting results.
              </p>
              <button className="btn">BOOK NOW →</button>
            </div>

            <div className="slide-right">
              <img src="/AC-Repairf.png" alt="AC Repair" className="slide-img" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
         <div>
          <div className="slide-wrapper">
            <div className="slide-left">
              <h3 className="subtitle">CoolMaster AC Services</h3>
              <h1 className="title">AC Installation</h1>
              <p className="text">
               Delivers quick, professional AC repair for homes and offices. From cooling problems and gas leaks to noise and electrical faults, our technicians handle all issues with precision. We service split, window, and cassette ACs with fast turnaround and lasting results.
              </p>
              <button className="btn">BOOK NOW →</button>
            </div>

            <div className="slide-right">
              <img src="/AC-Repairf.png" alt="AC Repair" className="slide-img" />
            </div>
            
          </div>
        </div>
      </Slider>
    </div>
    {/* ABOUT SECTION BELOW SLIDER */}
      <AboutSection />
      <FlipCards />
    </>
  );
}

function AboutSection() {
  return (
    <div className="about-section">
        <div className="slide-wrapper">
        <div className="slide-left">
            <h2>About CoolMaster AC Services</h2>
            <br></br>
                <p style={{textAlign:"justify"}}>CoolMaster AC Services is your trusted AC repair and installation expert in Pimpri-Chinchwad, Pune. With 10+ years of experience, we provide fast, reliable, and affordable service for all AC brands. Our certified technicians handle AC repair, installation, gas refilling, leak fixing, and AMC maintenance for Split, Window, Inverter, Cassette, and Commercial ACs.</p>
                <br></br>
                <p style={{textAlign:"justify"}}>We focus on quick response, quality workmanship, and long-lasting cooling performance, making us the most dependable choice for your home or office AC needs.</p>
                <br></br>
            <Link to="/about" className="desktop-btn">
                <button className="contact-btn">Know More</button>
            </Link>
        </div>
        <div className="slide-right">
              <img src="/about-us.png" alt="Aboutus" className="about-img" />
        </div>
    </div>
  </div>
    
  );
}





export default Home;