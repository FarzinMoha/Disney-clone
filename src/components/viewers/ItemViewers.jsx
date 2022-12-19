import React from "react";
import styled from "styled-components";

const ItemViewers = ({ src, videoSrc }) => {
  return (
    <Wrap>
      <img src={src} alt={src} />
      <video autoPlay loop playsInline muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms var(--transition) 0s;
  border: 3px solid var(--boxBorderDark);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: var(--opacityTransition);
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: var(--boxBorder);
    video {
      opacity: 1;
    }
  }
`;

export default ItemViewers;
