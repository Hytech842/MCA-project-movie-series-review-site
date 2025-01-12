import React, { useEffect, useState } from 'react';
import fetchFromAPI from './api/fetchFromAPI';
import { CCard, CCardImage, CCardTitle } from '@coreui/react';

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchFromAPI('movie/popular');
        setMovies(data.results || []); // Ensure results exist
      } catch (err) {
        setError('Failed to fetch movies');
      }
    };

    fetchMovies();
  }, []);

  if (error) return <p>{error}</p>; // Display error if API fails

  return (
    <div className="card-container">
      {movies.map((movie) => (
        <CCard className="text-center" style={{ width: '12rem' }} key={movie.id}>
          <CCardImage orientation="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <CCardTitle>{movie.title}</CCardTitle>
        </CCard>
      ))}
    </div>
  );
};

export default MovieCards;