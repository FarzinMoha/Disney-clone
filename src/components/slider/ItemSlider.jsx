import React from "react";
import styled from "styled-components";

const ItemSlider = ({ src }) => {
  return (
    <Wrap>
      <a>
        <img src={src} alt={src} />
      </a>
    </Wrap>
  );
};

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  positin: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
      cursor:pointer;
      position:relative;
      display:block;
      padding:4px;

      img{
        width:100%;
        height:100%;
      }
      &:hover{
        padding:0;
        border:4px solid var(--boxBorder);
        transition-duration:300ms;

      }
  }
`;

export default ItemSlider;
