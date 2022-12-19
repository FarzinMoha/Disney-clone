import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserName, selectUserPhoto, setSignOutState } from "../redux/user-slice/userSlice";
import { useDispatch } from "react-redux";
import { signOutUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const SignOut = () => {
  const [show, setShow] = useState(false);
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        signOutUser().then(()=>{
          dispatch(setSignOutState())
          navigate("/");
        })
        .catch((error)=>{
          alert(error.message)
        })
      }
    });
  }, [userName]);
  const Signout = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      width: 90%;
      height: 90%;
      border-radius: 50%;
      cursor: pointer;
    }
  `;

  const DropeDown = styled.div`
    position: absolute;
    width: 150px;
    height: 100px;
    background: var(--white);
    right: 2px;
    bottom: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scaleY(0);
    opacity: 0;
    transition: 1s;
    &.show {
      transition: 1s;
      transform: scaleY(1);
      opacity: 1;
    }
  `;

  const Btn = styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid black;
    background: var(--white);
    border-radius: 4px;
    cursor:pointer;
  `;

  return (
    <Signout>
      <img src={userPhoto} alt="" onClick={() => setShow(!show)} />
      <DropeDown className={show ? "show" : null}>
        <Btn onClick={()=>signOutUser()}>Sign Out</Btn>
      </DropeDown>
    </Signout>
  );
};

export default SignOut;
