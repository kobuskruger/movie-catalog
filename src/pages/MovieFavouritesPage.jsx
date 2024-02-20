import MovieList from "../components/features/movies/MovieList";
import { useLocalStorage } from "@uidotdev/usehooks";

function MovieFavouritesPage() {
  const [favoriteMovies] = useLocalStorage("favoriteMovies");

  if (!favoriteMovies || favoriteMovies.length === 0) {
    return <div>No favourite movies</div>;
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <MovieList movies={favoriteMovies} />
    </div>
  );
}

export default MovieFavouritesPage;
