import React from "react";
import "./Home.scss";
import HeroBanner from "./HeroBanner/HeroBanner";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: "62.5rem" }}></div>
    </div>
  );
};

export default Home;
