const BASE_PATH = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return "error";
  }
};
