// import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
// import hero_banner from "../../assets/hero_banner.jpg";
import m_name from "../../assets/name.png";
import banner from "../../assets/pushpa.jpg";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={m_name} alt="" className="caption-img" />
          <p>
            Based on the smuggling of red sander trees in Seshachalam <br />
            forest, Andhra Pradesh, Pushpa tells the story of a lorry driver
            <br />
            who is part of the illegal business.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Top Pics of You "} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
