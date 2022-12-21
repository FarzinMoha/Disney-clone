import React, { useEffect } from "react";
import styled from "styled-components";
import Trending from "../components/movie-sections/sections/Trending";
import ImgSlider from "../components/slider/ImgSlider";
import Viewers from "../components/viewers/Viewers";
import Suggest from "../components/movie-sections/sections/Suggest";
import NewDisney from "../components/movie-sections/sections/NewDisney";
import Originals from "../components/movie-sections/sections/Orginals";
import { getCategoriesAndDocuments } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../redux/movie-slice/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(
        setMovies({
          recommend: categoryMap.recommend,
          newDisney: categoryMap.new,
          original: categoryMap.original,
          trending: categoryMap.trending,
        })
      );
    };
    getCategoriesMap();
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Suggest />
      <NewDisney />
      <Originals />
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
