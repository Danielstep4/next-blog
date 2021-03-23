import React from "react";
import CSS from "csstype";

const Footer: React.FC = () => {
  const footerStyle: CSS.Properties = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontSize: "1.6rem",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "3rem",
  };
  return <footer style={footerStyle}>&copy; 2021, Daniel Stepanishin</footer>;
};

export default Footer;
