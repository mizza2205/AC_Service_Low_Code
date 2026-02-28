import React from "react";
import "./FlipCards.css";

function FlipCards() {
    
  const cards = [
    {
      img: "/slide-1.jpg",
      title: "Enhanced Cooling Efficiency",
      desc: "Regular cleaning increases cooling performance and reduces load on compressor."
    },
    {
      img: "/slide-2.jpg",
      title: "Lower Energy Consumption",
      desc: "Timely service reduces electricity usage by improving AC efficiency."
    },
    {
      img: "/slide-4.jpg",
      title: "Longer AC Life",
      desc: "Maintenance prevents major AC issues and increases lifespan."
    },
    {
      img: "/AC-Repairf.png",
      title: "Improved Air Quality",
      desc: "Removes dust & bacteria to provide clean and healthy air."
    }
  ];

  return (
    <div className="flip-container">
        <h2 className="flip-heading">Why Choose CoolMaster AC Services?</h2>
      {cards.map((item, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-inner">
            
            {/* FRONT */}
            <div className="flip-front">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>

            {/* BACK */}
            <div className="flip-back">
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FlipCards;