import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import ItemSlider from "./ItemSlider";
import image1 from "../../assets/images/slider-badag.jpg";
import image2 from "../../assets/images/slider-badging.jpg";
import image3 from "../../assets/images/slider-scale.jpg";
import image4 from "../../assets/images/slider-scales.jpg";

const ImgSlider = () => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...setting}>
      <ItemSlider src={image1} />
      <ItemSlider src={image2} />
      <ItemSlider src={image3} />
      <ItemSlider src={image4} />
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

export default ImgSlider;
