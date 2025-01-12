import React, { useEffect, useState } from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import { CCard, CCardTitle, CCardImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import fetchFromAPI from './api/fetchFromAPI';
import { Link } from 'react-router-dom';
import logo from "./Images/logo.jpg";
import "./style/HomePage.css";

export default function HomePage({ movies: initialMovies }) {
  const [movies, setMovies] = useState(initialMovies || []); // Use a different name for the prop
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

    // Fetch movies only if the initialMovies prop is empty
    if (!initialMovies || initialMovies.length === 0) {
      fetchMovies();
    }
  }, [initialMovies]);

  if (error) return <p>{error}</p>; // Display error if API fails

  return (
    <div className="container">
      <div className="h1">POPULAR</div>
      <div className="card-container">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="text-center card" style={{ width: '12rem', margin: '10px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '5px' }}
              />
              <h5>{movie.title}</h5>
            </div>
          </Link>
        ))}
      </div>

      <div className="this-season">
        <div className="h1">THIS SEASON</div>
      </div>
    </div>
  );
}