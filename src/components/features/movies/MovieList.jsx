import MovieListItem from "./MovieListItem";

function MovieList({ movies }) {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
