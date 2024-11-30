import React from "react";
import "../style/hero.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      {/* <Image src={"/mypicture.jpeg"} height={100} width={100} alt="myprofile"/> */}
      <div className="hero-content">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div className="hero-main">
            <p data-aos="flip-up">I am</p>
            <p data-aos="flip-up">Areeba</p>
            <p data-aos="flip-up">Saleem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
