import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemMovieCard = ({ id, cardImg, title }) => {
  return (
    <Wrap key={id}>
      <Link to={`/detail/${id}`}>
        <img src={cardImg} alt={title} />
      </Link>
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
    inset: 0;
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    transition: var(--opacityTransition);
  }
  &:hover {
    transform: scale(1.05);
    border-color: var(--boxBorder);
  }
`;

export default ItemMovieCard;
