import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Movies } from "../api/apiAgent";
import MovieGenreTagList from "../components/features/movies/MovieGenreTagList";
import MovieFavoriteIcon from "../components/features/movies/MovieFavoriteIcon";
import MovieMeta from "../components/features/movies/MovieMeta";
import { IconMovie } from "@tabler/icons-react";
import MoviePoster from "../components/features/movies/MoviePoster";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const {
    data: movie,
    status,
    error,
  } = useQuery({
    queryKey: ["movies", "movie", movieId],
    queryFn: () => Movies.getMovie(movieId),
  });

  if (status === "idle" || status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      style={{
        "--image-url": `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
      className="flex flex-shrink flex-grow flex-col flex-wrap gap-4 rounded-lg bg-white bg-opacity-95 bg-[image:var(--image-url)] bg-cover bg-no-repeat p-4 bg-blend-overlay sm:flex-row"
    >
      <MoviePoster title={movie.title} posterUrl={movie.poster_path} />

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <MovieGenreTagList genreIds={movie.genres.map((g) => g.id)} />
          </div>
          <div className="flex flex-col items-end justify-between">
            <MovieFavoriteIcon movie={movie} />
          </div>
        </div>

        <p className="flex-grow text-sm text-slate-800">{movie.overview}</p>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <MovieMeta
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            releaseDate={movie.release_date}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
