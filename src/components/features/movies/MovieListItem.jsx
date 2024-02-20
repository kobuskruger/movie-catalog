import { IconMovie } from "@tabler/icons-react";
import MovieGenreTagList from "./MovieGenreTagList";
import MovieMeta from "./MovieMeta";
import Button from "../../common/Button";
import MovieFavoriteIcon from "./MovieFavoriteIcon";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { Movies } from "../../../api/apiAgent";

function MovieListItem({ movie }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleButtonHover = () => {
    queryClient.prefetchQuery({
      queryKey: ["movies", "movie", movie.id],
      queryFn: () => Movies.getMovie(movie.id),
    });
  };

  return (
    <div
      style={{
        "--image-url": `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
      className="flex flex-shrink flex-grow flex-col flex-wrap gap-4 rounded-lg bg-white bg-opacity-95 bg-[image:var(--image-url)] bg-cover bg-no-repeat p-4 bg-blend-overlay sm:flex-row"
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="max-h-64 max-w-max self-center rounded-lg sm:max-h-80 sm:max-w-56"
        />
      ) : (
        <div className="flex h-64 max-h-64 w-56 max-w-full items-center justify-center self-center rounded-lg bg-gray-300 sm:max-h-80 sm:max-w-56">
          <IconMovie size={48} />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <MovieGenreTagList genreIds={movie.genre_ids} />
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
          <Button
            onClick={() => navigate(`/movies/${movie.id}`)}
            onMouseEnter={handleButtonHover} // prefetch movie details on hover
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieListItem;
