import React from "react";
import Header from "./Header";

const Home = () => (
  <div className="app-view cover">
    <div className="scrollable">
      <Header logoType="blackLogo" withGradient={true} />
    </div>
  </div>
);

export default Home;
