// import React from "react";
import "./Stars.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
const TvSeries = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);
  // For Mouse Wheel Scroll
  // const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2QzODRiMjk4ZGU3YjNjMTJkNDk4MzY5MDFhZDIxNiIsIm5iZiI6MTczMjI4MzAyNy44MDQyMTg4LCJzdWIiOiI2NzNjODZjN2U3NzJjY2MxNTY0NTJmMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TbgpYbi3MF1L9wTkJRow6y1UKS0kFnwsFq2v8j7WtP0",
    },
  };

  // const handleWheel = (event) => {
  //   event.preventDefault();
  //   cardsRef.current.srollLeft += event.deltaY;
  // };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/person/day?language=en-US",
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
    <div className="hom1">
      <Navbar />
      <div className="tvseries">
        <h2>Popular on Series</h2>
        <div className="container" /*ref={cardsRef}*/>
          {apiData.map((card, index) => {
            if (card.gender == 2) {
              return (
                <div className="section" key={index}>
                  <Link to={`/player/${card.id}`} className="card">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + card.profile_path
                      }
                      alt=""
                    />
                  </Link>
                  <p>{card.name}</p>

                  {/* <p>Release Date: {card.first_air_date}</p>
                <p>Rating: {card.vote_average}</p> */}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
