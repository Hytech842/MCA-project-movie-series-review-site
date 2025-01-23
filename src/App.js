import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./movie-series-review-site/Re-use-components/Navbar";
import Home from "./movie-series-review-site/HomePage"; // This is your `MoviesList`
import RegistrationForm from './movie-series-review-site/forms/RegistrationForm';
import MovieDetail from './movie-series-review-site/Re-use-components/MovieDetail';
import fetchFromAPI from './api/fetchFromAPI';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const data = await fetchFromAPI('movie/popular');
  //       setMovies(data.results || []);
  //     } catch (err) {
  //       setError('Failed to fetch movies');
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  // if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;