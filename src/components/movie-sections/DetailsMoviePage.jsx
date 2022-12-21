import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getMovie } from "../../firebase/firebase";

const DetailsMoviePage = () => {
  const {id} = useParams()
  const [movie , setMovie] = useState([])
  const {backgroundImg, description, subTitle, title, titleImg} = movie
  useEffect(()=>{
    const getMovieItems = async () =>{
      const movieItems = await getMovie(id)
      setMovie(movieItems[0])
    }
    getMovieItems()
  },[id])
  return (
    <Container>
      <Background>
        <img
          src={backgroundImg}
          alt={title}
        />
      </Background>
      <ImgTitle>
        <img
        src={titleImg}
        alt={title}
        />
      </ImgTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupeWatch>
            <div>
              <img src="watchlist-icon.svg" alt="" />
            </div>
          </GroupeWatch>
        </Controls>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  min-height: calc (100vh - 250px);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  top: 75px;
  padding: 0 calc(5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600p;
    min-width: 200px;
    width: 25vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row no-wrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: var(--white);
  border: none;
  color: var(--black);
  img {
    width: 32px;
    height: 20px;
  }
  &:hover {
    background: var(--buttonHover);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
      height: 15px;
    }
  }
`;
const Trailer = styled(Player)`
  background: var(--darkButton);
  border: 1px solid var(--white);
  color: var(--white);
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkerButton);
  border-radius: 50%;
  border: 2px solid var(--white);
  cursor: pointer;
  span {
    background-color: var(--white);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupeWatch = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--white);
  div {
    height: 50px;
    height: 50px;
    background: var(--black);
    border-radius: 50%;
    img {
      width: 100%;
      z-index: 10;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default DetailsMoviePage;
