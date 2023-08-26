import React from "react";
import Link from "next/link";
import styled from "styled-components";

function HomePageProject({ title, description, thumbnail }) {
  const StyledImg = styled.img`
      filter: grayscale(50%),
      z-index: 1,
      object-fit: "cover",
      position: "absolute",
      top: "0",
      left: 0,
      width: 40%,
      height: 40%,  
  `;
  const DivStyled = styled.div`
    box-shadow: 3px 3px 20px rgba(44, 62, 80, 0.1);
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    padding: 20px;
    flex-flow: column;
    height: 95%;
    width: auto;
    min-height: 200px;
    position: relative;

    @media (max-width: 768px) {
      .project-item {
        margin: 60px 0;
      }
    }
    &:hover {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    img {
      filter: "grayscale(50%)";
      z-index: 1;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 20%;
    }

    &::after {
      z-index: 2;
      content: "";
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    :global(*) {
      z-index: 3;
    }

    :global(p) {
      margin-bottom: 0;
    }
    p {
      margin: 0px;
      color: white;
    }
  `;

  return (
    <div>
      <DivStyled className="project-item">
        <img src={thumbnail} />
        <h4 sx={{ fontSize: "100px", color: "black" }}>{title}</h4>
        <p sx={{ margin: "0px", color: "black" }}>{description}</p>
      </DivStyled>
    </div>
  );
}

export default HomePageProject;
