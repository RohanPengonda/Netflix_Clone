// import React from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2QzODRiMjk4ZGU3YjNjMTJkNDk4MzY5MDFhZDIxNiIsIm5iZiI6MTczMjAyMDM3Ny42NDI5Mjg2LCJzdWIiOiI2NzNjODZjN2U3NzJjY2MxNTY0NTJmMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fNUES8jObM4fmoEV_kcxN9fgE4_UrKGSd0TKMCsm7kk",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results[0]))
      .catch((err) => console.error(err));
  });
  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-1);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
