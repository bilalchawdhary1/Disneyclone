import { useEffect, useState } from "react";
import { getTrendingMovies } from '../services/GlobleApi';

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getTrendingMovies();
        setMovies(moviesData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  return (
    <div className="flex overflow-x-auto w-full px-16 py-4 no-scrollbar">
      {movies.map((movie) => (
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md" key={movie.id} 
            />
        ))}
    </div>
  );
}

export default Slider;
