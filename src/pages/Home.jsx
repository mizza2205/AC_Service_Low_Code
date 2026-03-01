import Slider from "react-slick";
import "./Home.css"; // 👈 CSS yaha import
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
        <Slider {...settings}>
          {" "}
          {/* this is spread operator which is used for apply top property */}
          {/* Slide 1 */}
          <div>
            <div className="slide-wrapper">
              <div className="slide-left">
                <h3 className="subtitle">CoolMaster AC Services</h3>
                <h1 className="title">AC Gas Refill</h1>
                <p className="text">
                  Get perfect cooling with our fast and accurate AC gas refill
                  service. We use high-quality refrigerant to fix low cooling,
                  gas leaks, and performance issues for split, window, and
                  cassette ACs. Enjoy efficient, powerful cooling with our quick
                  and reliable service.
                </p>
                <button className="btn">BOOK NOW →</button>
              </div>

              <div className="slide-right">
                <img
                  src="/AC-Gas-Refill-.jpeg"
                  alt="AC Service"
                  className="slide-img"
                />
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
                  Delivers quick, professional AC repair for homes and offices.
                  From cooling problems and gas leaks to noise and electrical
                  faults, our technicians handle all issues with precision. We
                  service split, window, and cassette ACs with fast turnaround
                  and lasting results.
                </p>
                <button className="btn">BOOK NOW →</button>
              </div>

              <div className="slide-right">
                <img
                  src="/AC-Repairf.png"
                  alt="AC Repair"
                  className="slide-img"
                />
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
                  Delivers quick, professional AC repair for homes and offices.
                  From cooling problems and gas leaks to noise and electrical
                  faults, our technicians handle all issues with precision. We
                  service split, window, and cassette ACs with fast turnaround
                  and lasting results.
                </p>
                <button className="btn">BOOK NOW →</button>
              </div>

              <div className="slide-right">
                <img
                  src="/AC-Repairf.png"
                  alt="AC Repair"
                  className="slide-img"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* ABOUT SECTION BELOW SLIDER */}
      <AboutSection />
      {/* FLIPCARDS SECTION */}
      <FlipCards />
      <Counters />
      <ServiceSec />
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
          <p style={{ textAlign: "justify" }}>
            CoolMaster AC Services is your trusted AC repair and installation
            expert in Pimpri-Chinchwad, Pune. With 10+ years of experience, we
            provide fast, reliable, and affordable service for all AC brands.
            Our certified technicians handle AC repair, installation, gas
            refilling, leak fixing, and AMC maintenance for Split, Window,
            Inverter, Cassette, and Commercial ACs.
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            We focus on quick response, quality workmanship, and long-lasting
            cooling performance, making us the most dependable choice for your
            home or office AC needs.
          </p>
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
{
  /* ABOUT SECTION BELOW END */
}
{
  /* FLIPCARDS SECTION START */
}
function FlipCards() {
  const cards = [
    {
      img: "/slide-1.jpg",
      title: "Enhanced Cooling Efficiency",
      desc: "Regular cleaning increases cooling performance and reduces load on compressor.",
    },
    {
      img: "/slide-2.jpg",
      title: "Lower Energy Consumption",
      desc: "Timely service reduces electricity usage by improving AC efficiency.",
    },
    {
      img: "/slide-4.jpg",
      title: "Longer AC Lifespan",
      desc: "Maintenance prevents major AC issues and increases lifespan.",
    },
    {
      img: "/AC-Repairf.png",
      title: "Improved Air Quality",
      desc: "Removes dust & bacteria to provide clean and healthy air.",
    },
  ];

  return (
    <div className="flip-section">
      {/* ⭐ JUST THIS NEW HEADING */}
      <h2 className="flip-heading">Why Choose CoolMaster AC Services</h2>

      <div className="flip-container">
        {cards.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-inner">
              <div className="flip-front">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
              <div className="flip-back">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* FLIPCARDS SECTION END */
}

{
  /* COUNTER SECTION START */
}

function LoopCounter({ target, speed = 10 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (count < target) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, speed); // speed control
    } else {
      setTimeout(() => {
        setCount(0); // restart after 1 sec
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [count, target, speed]);

  return <h2>{count}+</h2>;
}

function Counters() {
  const countCard = [
    { number: 1000, label: "Happy Customer's" },
    { number: 10, label: "Years of Service Excellence" },
    { number: 7000, label: "AC Repaired" },
    { number: 1500, label: "AC Installations" },
  ];

  return (
    <div className="counter-container">
      {countCard.map((item, index) => (
        <div className="counter-box" key={index}>
          <LoopCounter target={item.number} speed={10} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
{
  /* COUNTER SECTION END */
}

{
  /* SERVICE SECTION START */
}
function ServiceSec() {
  const ServiceCards = [
    {
      img: "/AC-Repairf.png",
      title: "AC Repair",
      desc: "Delivers quick, professional AC repair for homes and offices. From cooling problems and gas leaks to noise and electrical faults, our technicians handle all issues with precision. We service split, window, and cassette ACs with fast turnaround and lasting results.",
      button: "Know More",
    },
    {
      img: "/AC-Gas-Refill-.jpeg",
      title: "AC Gas Refill",
      desc: "Get perfect cooling with our fast and accurate AC gas refill service. We use high-quality refrigerant to fix low cooling, gas leaks, and performance issues for split, window, and cassette ACs. Enjoy efficient, powerful cooling with our quick and reliable service.",
      button: "Know More",
    },
    {
      img: "/ac-installtion.jpg",
      title: "AC Installation",
      desc: "CoolMaster AC Services delivers fast and reliable air conditioner repair for homes and offices. Our expert technicians fix cooling issues, gas leaks, low cooling, noise problems, and electrical faults using advanced tools. We repair split, window.",
      button: "Know More",
    },
  ];
  return (
    <>
      <br></br>
      <h2 style={{ textAlign: "center", textTransform: "capitalize" }}>
        Complete AC Care Services by CoolMaster AC Services
      </h2>
      <div className="service-container">
        {ServiceCards.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.img} alt="/Services-images" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link to="/service">
              <button className="service-btn">{item.button}</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
{
  /* SERVICE SECTION END */
}

export default Home;
