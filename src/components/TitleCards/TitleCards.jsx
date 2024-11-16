// import React from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
// import { useEffect, useRef } from "react";

const TitleCards = () => {
  // For Mouse Wheel Scroll
  // const cardsRef = useRef();
  // const handleWheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.srollLeft += event.deltaY;
  // };
  // useEffect(() => {
  //   cardsRef.current.addEventListener("wheel", handleWheel);
  // }, []);
  return (
    <div className="titlecards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" /*ref={cardsRef}*/>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
