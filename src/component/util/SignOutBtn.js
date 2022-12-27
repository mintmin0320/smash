import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const TopButton = () => {

  const handleSignOut = () => {
    axios.post('/auth/signout')
      .then(() => {
        console.log("로그아웃");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Container>
      <button
        className="topBtn"
        onClick={handleSignOut}
      >
        <FontAwesomeIcon icon={faPowerOff} size="2x" />
      </button>
    </Container>
  )
};

const Container = styled.div`
  .topBtn {
    position: fixed; 
    bottom: 40px; 
    right: 40px;
    width: 50px; 
    height: 50px;
    border-radius: 100%;
    border: 0 none;
    background: #848484;
    color: white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.06em;
    cursor: pointer;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .topBtn:hover,
  .topBtn:focus,
  .topBtn:active { 
    outline: 0 none; 
  } 
`

export default TopButton;