import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { styled } from "styled-components";

const Player = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <PlayerContainer>
      <div className="player">
        <BsArrowLeft className="backArrow" onClick={handleGoBack} />
        <video
          src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
          autoPlay
          loop
          controls
        />
      </div>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  .player {
    position: relative;
    width: 100vw;
    height: 100vh;
    video {
      width: 100%;
      height: 100%;
    }
    .backArrow {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 3rem;
      cursor: pointer;
      color: white;
      z-index: 1;
    }
  }
`;

export default Player;
