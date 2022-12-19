import React from "react";
import styled from "styled-components";
import ItemSuggest from "./ItemSuggest";

const Suggest = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <ItemSuggest to='/' src='/images/slider-badag.jpg'/>
        <ItemSuggest to='/' src='/images/slider-badag.jpg'/>
        <ItemSuggest to='/' src='/images/slider-badag.jpg'/>
        <ItemSuggest to='/' src='/images/slider-badag.jpg'/>
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

export default Suggest;
