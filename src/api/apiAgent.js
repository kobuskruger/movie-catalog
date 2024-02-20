import axios from "axios";

if (!import.meta.env.VITE_TMDB_BEARER_TOKEN) {
  throw new Error("VITE_TMDB_BEARER_TOKEN is not set");
}

const apiAgent = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`,
  },
});

const requests = {
  get: (url) => apiAgent.get(url).then((res) => res.data),
};

const Movies = {
  getMovie: (id) => requests.get(`movie/${id}`),
  search: (query) => requests.get(`search/movie?query=${query}`),
};

const Genres = {
  getGenres: () => requests.get("genre/movie/list"),
};

export { Movies, Genres };
