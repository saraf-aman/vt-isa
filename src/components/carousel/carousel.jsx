import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.styles.scss";

import img1 from "../../assets/carousle/holi-1.jpg";
import img2 from "../../assets/carousle/committee-pic.JPG";
// import img3 from "../../assets/carousle/committee-pic.JPG"
import img4 from "../../assets/carousle/holi-2.jpg";
import img5 from "../../assets/carousle/international-cafe-hours.jpg";
import img6 from "../../assets/carousle/core-committee-pic.JPG";
import img7 from "../../assets/carousle/dandiya.jpeg";
import img8 from "../../assets/carousle/committee-social.png";
import img9 from "../../assets/carousle/indo-pak-2.jpeg";
import img10 from "../../assets/carousle/welcome-social.JPG";
import img11 from "../../assets/carousle/indo-pak.jpg";

const CarouselPage = () => {
  return (
    <Carousel
      className="carousel"
      renderThumbs={() => {}}
      autoPlay
      interval={2500}
      infiniteLoop
    >
      <div>
        <img src={img1} alt="img1" />
      </div>
      <div>
        <img src={img2} alt="img2" />
      </div>
      {/*<div>
        <img src={img3} alt="img3" />
  </div>*/}
      <div>
        <img src={img4} alt="img4" />
      </div>
      <div>
        <img src={img5} alt="img5" />
      </div>
      <div>
        <img src={img6} alt="img6" />
      </div>
      <div>
        <img src={img7} alt="img7" />
      </div>
      <div>
        <img src={img8} alt="img8" />
      </div>
      <div>
        <img src={img9} alt="img9" />
      </div>
      <div>
        <img src={img10} alt="img10" />
      </div>
      <div>
        <img src={img11} alt="img11" />
      </div>
    </Carousel>
  );
};

export default CarouselPage;
