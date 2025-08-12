import React, { useEffect } from "react";
import "../App.css";

const MovieList = ({ movies }) => {
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const list = Array.isArray(movies) ? movies : [];

  return (
    <div>
      <h1 className="page-title">Movie Results</h1>
      <div className="movie-list">
        {list.map((movie) => (
          <div className="movie-card" key={movie["#IMDB_ID"] || movie["#TITLE"]}>
            <div className="poster-wrap">
              {movie["#IMG_POSTER"] ? (
                <img className="poster" src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} />
              ) : (
                <div className="poster" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9aa4b2', fontSize: 12 }}>No Image</div>
              )}
              {movie["#YEAR"] && <div className="badge">{movie["#YEAR"]}</div>}
            </div>
            <div className="content">
              <div className="title">{movie["#TITLE"]}</div>
              <div className="meta">
                {movie["#RANK"] && <span>Rank: {movie["#RANK"]}</span>}
                {movie["#ACTORS"] && <span>Cast: {movie["#ACTORS"]}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
