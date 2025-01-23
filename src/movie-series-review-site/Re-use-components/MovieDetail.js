import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchFromAPI from '../api/fetchFromAPI';
import '../style/MovieDetail.css';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const data = await fetchFromAPI(`movie/${movieId}`);
        setMovie(data);

        // Fetch recommendations directly from the API
        const recommendedData = await fetchFromAPI(`movie/${movieId}/recommendations`);
        setRecommendations(recommendedData.results || []);
      } catch (err) {
        setError('Failed to fetch movie details or recommendations');
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
              style={{ width: '100%' }}
            />
          ) : (
            <p>No Poster Available</p>
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

      {/* Recommendations Section */}
      <div className="recommendations">
        <h3>Recommended Movies</h3>
        <div className="recommendation-list">
          {recommendations.length > 0 ? (
            recommendations.map((rec) => (
              <Link
                key={rec.id}
                to={`/movie/${rec.id}`} // Link to the clicked movie's details page
                className="recommendation-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200/${rec.poster_path}`}
                  alt={rec.title}
                  className="recommendation-poster"
                />
                <p className="recommendation-title">{rec.title}</p>
              </Link>
            ))
          ) : (
            <p>No recommendations available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;