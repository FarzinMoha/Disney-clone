import React from "react";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="disney+" />
      </Logo>
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="home" />
          <span>Search</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="home" />
          <span>watchlist</span>
        </a>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>orginals</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="home" />
          <span>moveis</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="home" />
          <span>seies</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
    </Nav>
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
  background-color:rgb(0,0,0,0.6);
  color:var(--white);
  padding:8px 16px;
  text-transform:uppercase;
  letter-spacing:1.5px;
  border:1px solid var(--white);
  border-radius:4px;
  transition: all 0.2s ease 0s;
  &:hover{
      background-color:var(--white);
      color:var(--background);
      cursor:pointer;
      border-color:transparent;
  }
`

export default Navigation;
