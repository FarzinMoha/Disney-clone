import React from "react";
import styled from "styled-components";
import ItemTrending from "./ItemTrending";

const Trending = () => {
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        <ItemTrending to='/' src='/images/slider-badag.jpg'/>
        <ItemTrending to='/' src='/images/slider-badag.jpg'/>
        <ItemTrending to='/' src='/images/slider-badag.jpg'/>
        <ItemTrending to='/' src='/images/slider-badag.jpg'/>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 769px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default Trending;
