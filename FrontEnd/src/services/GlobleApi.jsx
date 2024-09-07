import axios from "axios";

const moviesBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "9b23d151fdebbb137a18d05917ed0fa8";
// https://api.themoviedb.org/3/trending/all/day?api_key=9b23d151fdebbb137a18d05917ed0fa8

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${moviesBaseUrl}/trending/all/day?api_key=${apiKey}`
  );
  return response.data.results;
};
