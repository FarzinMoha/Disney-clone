import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../../redux/movie-slice/movieSlice"; 
import ItemMovieCard from "../ItemMovieCard";
const NewDisney = () => {
  const newDisney = useSelector(selectNewDisney);
  return (
    <Container>
      <h4>New to Desney</h4>
      <Content>
        {newDisney &&
          newDisney.map((movie) => {
            const { id, cardImg, title } = movie;
            return (
              <ItemMovieCard key={id} id={id} cardImg={cardImg} title={title} />
            );
          })}
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

export default NewDisney;
