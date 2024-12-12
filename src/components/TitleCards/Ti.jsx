// import React from "react";
import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);
  // For Mouse Wheel Scroll
  // const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2QzODRiMjk4ZGU3YjNjMTJkNDk4MzY5MDFhZDIxNiIsIm5iZiI6MTczMjAyMDM3Ny42NDI5Mjg2LCJzdWIiOiI2NzNjODZjN2U3NzJjY2MxNTY0NTJmMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fNUES8jObM4fmoEV_kcxN9fgE4_UrKGSd0TKMCsm7kk",
    },
  };

  // const handleWheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.srollLeft += event.deltaY;
  // };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results))
      .catch((err) => console.error(err));
  });

  //     useEffect(() => {
  //   cardsRef.current.addEventListener("wheel", handleWheel);
  // }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" /*ref={cardsRef}*/>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
