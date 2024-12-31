import React from 'react';
import { Link } from "react-router-dom";

function MovieCard({ movie, index }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-details">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>

      <Link to={`/movie/${index}`}>view more details</Link>
      </div>
    </div>
  );
}

export default MovieCard;
