// import React from "react";
import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);
  const [release, setrelease] = useState();
  // For Mouse Wheel Scroll
  // const cardsRef = useRef();
  const mouse_Enter = (rel) => {
    return (
      <>
        console.log({rel});
        <p>{rel}</p>
        <p>{release}</p>
        {/* <p>{card.vote_average}</p> */}
      </>
    );
  };
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
      <div
        className="card-list"
        /*ref={cardsRef}*/
      >
        {apiData.map((card, index) => {
          return (
            <Link
              to={`/player/${card.id}`}
              // className="card"
              key={index}
              // onMouseEnter={() => {
              //   mouse_Enter(card.release_date);
              //   setrelease(card.release_date);
              //   // console.log(card.original_title);
              // }}
            >
              <div className="card">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                  alt=""
                />
                <p className="title">{card.original_title}</p>
                <div className="show">
                  <p className="show1">Summary:- {card.overview}</p>
                  <p className="show1">Release Date:- {card.release_date}</p>
                  <p className="show1">Rating:- {card.vote_average}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
