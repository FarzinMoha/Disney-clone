import React, { useEffect } from "react";
import styled from "styled-components";
import NewDesney from "../new-desney/NewDesney";
import Orginals from "../orginals/Orginals";
import ImgSlider from "../slider/ImgSlider";
import Suggest from "../suggest/Suggest";
import Trending from "../trending/Trending";
import Viewers from "../viewers/Viewers";
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "../../firebase/firebase";
import setMovie from "../../redux/movie-slice/movieSlice";
import { selectUserName } from "../../redux/user-slice/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  // useEffect(()=>{
  //   fetchData(recommends , newDisneys , originals , trendings )
  //   dispatch(setMovie({
  //     recommend:recommends,
  //     newDisney:newDisneys,
  //     original:originals,
  //     trending:trendings

  //   }))
  // },[userName])
  // console.log(userName);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Suggest />
      <NewDesney />
      <Orginals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 80px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: "";
    opacity: 1;
    // inset:0px;
    background: url("/images/home-background.png") no-repeat center center/cover
      fixed;
    z-index: -1;
  }
`;

export default Home;
