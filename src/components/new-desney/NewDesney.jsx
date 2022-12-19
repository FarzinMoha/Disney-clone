import React from "react";
import styled from "styled-components";
import ItemNewDesney from "./ItemNewDesney";

const NewDesney = () => {
  return (
    <Container>
      <h4>New to Desney</h4>
      <Content>
        <ItemNewDesney to='/' src='/images/slider-badag.jpg'/>
        <ItemNewDesney to='/' src='/images/slider-badag.jpg'/>
        <ItemNewDesney to='/' src='/images/slider-badag.jpg'/>
        <ItemNewDesney to='/' src='/images/slider-badag.jpg'/>
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

export default NewDesney;
