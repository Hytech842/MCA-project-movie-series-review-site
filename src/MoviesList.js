import React, { useEffect, useState } from 'react';
import fetchFromAPI from './api/fetchFromAPI';

const MoviesList = () => {
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

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
