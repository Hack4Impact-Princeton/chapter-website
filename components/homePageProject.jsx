import React from "react";
import Link from "next/link";

function HomePageProject({ title, description, thumbnail, url }) {
  const divStyles = {
    boxShadow: "3px 3px 20px rgba(44, 62, 80, 0.1)",
    borderRadius: "5px",
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    overflow: "hidden",
    padding: "0px",
    margin: "0px",
    height: "95%",
    width: "auto",
    minHeight: "200px",
    position: "relative",
    backgroundColor: "blue",

    "&:hover": {
      boxShadow:
        "0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    end: {
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };

  const imgStyles = {
    filter: "grayscale(50%)",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="project-item" style={divStyles}>
      <div style={{ position: "relative", padding: 0, marginLeft: "-10%" }}>
        <img src={thumbnail} style={imgStyles} />
      </div>
      <div style={divStyles.end}></div>
      <div
        className="image-text"
        style={{
          position: "absolute",
          left: "5%",
          bottom: "5%",
          marginRight: "2%",
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HomePageProject;
