import { useEffect, useState } from "react";

const Movie = () => {
  const [seriesList, setSeriesList] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=77d384b298de7b3c12d49836901ad216"
    )
      .then((res) => res.json())
      .then((res) => setSeriesList(res.results));
  };
  useEffect(() => {
    getMovie();
  }, []);
  // console.log(seriesList);
  return (
    <div>
      Movie
      {seriesList.map((movie, index) => (
        <img
          key={index}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt=""
        />
      ))}
    </div>
  );
};

export default Movie;
