import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import {
  selectUserName,
  setUserLoginDetails,
} from "../redux/user-slice/userSlice";

import { auth, signInWithGooglePopup } from "../firebase/firebase";
import SignOut from "./SignOut";
import logo from '../assets/images/logo.svg'
import home from '../assets/images/home-icon.svg'
import search from '../assets/images/search-icon.svg'
import watchlist from '../assets/images/watchlist-icon.svg'
import original from '../assets/images/original-icon.svg'
import movie from '../assets/images/movie-icon.svg'
import series from '../assets/images/series-icon.svg'

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const handleAuth = async () => {
    const { user } = await signInWithGooglePopup();
    setUser(user);
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/disney-home");
      }
    });
  }, [userName]);

  return (
    <>
    <Nav>
      <Logo>
        <img src={logo} alt="disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src={home} alt="home" />
              <span>Home</span>
            </a>
            <a href="/">
              <img src={search} alt="home" />
              <span>Search</span>
            </a>
            <a href="/">
              <img src={watchlist} alt="home" />
              <span>watchlist</span>
            </a>
            <a href="/">
              <img src={original} alt="home" />
              <span>orginals</span>
            </a>
            <a href="/">
              <img src={movie} alt="home" />
              <span>movies</span>
            </a>
            <a href="/">
              <img src={series} alt="home" />
              <span>seies</span>
            </a>
          </NavMenu>
          <SignOut />
        </>
      )}
    </Nav>
    <Outlet/>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: var(--navBackgroundHover);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 5px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row no-wrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto 0 25px;
  padding: 0;
  position: relative;
  a {
    display: flex;
    align-items: center;
    padding:0 12px;
  img {
    width: 20px;
    min-width:20px
    height:20px;
    transform: translateY(-2px);
    z-index:auto;
    margin-right:5px;
  }
  span {
    color:var(--white);
    font-size:15px;
    letter-spacing:1.42px;
    line-height:1.08;
    padding:2px 0;
    white-space:nowrap;
    position:relative;
    text-transform:uppercase;
    &:before{
      background-color:var(--white);
      border-radius: 0px 0px 4px 4px ;
      position:absolute;
      bottom:-6px;
      right:0px;
      left:0px;
      content:'';
      height:2px;
      opacity:0;
      transform-origin:left center;
      transform : scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility:hidden;
      width:auto;
    }
  }
  &:hover{
    span:before{
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    }
  }
}
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  color: var(--white);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid var(--white);
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: var(--white);
    color: var(--background);
    cursor: pointer;
    border-color: transparent;
  }
`;

export default Navigation;
