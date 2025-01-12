import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchFromAPI from '../api/fetchFromAPI';
import '../style/MovieDetail.css'

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchFromAPI(`movie/${movieId}`);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  
  return (
    <div className="movie-detail-container container">
      <div className="movie-detail-content">
        {/* Poster on the left */}
        <div className="movie-poster">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%' }} // Ensure the poster takes up full width of its container
            />
          ) : (
            <p>No Poster Available</p> // Fallback if no poster
          )}
        </div>

        {/* Movie details on the right */}
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>
          <p><strong>Genres:</strong> {movie.genres?.map((genre) => genre.name).join(', ')}</p>
          <p><strong>Description:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
